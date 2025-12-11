# 🔧 **WildSafe Defense — Developer Implementation Guide**

## *CRM, Attribution, Forms, and PDF Delivery System*

### **Last Updated:** Dec 2025

### **Audience:** Developers (React/Next.js, GoHighLevel automation), Operators, Contractors

---

# 1. **System Overview**

WildSafe uses personalized wildfire risk reports hosted at:

```
https://reports.wildsafedefense.com/[PropertyID]

```

Each property has a unique Property ID, e.g. `WSD-0100`.

The lead flow involves two forms:

1. **Report Download Form** (embedded on each report page)
2. **Consultation Request Form** (embedded on the main WildSafe site)

Both forms are built in **GoHighLevel (GHL)** and embedded as iframes in the React/Next.js sites.

Lead attribution and pipeline movement is handled through GHL workflows, using the Property ID as the system-wide linking key.

---

# 2. **Data Model (GHL)**

### **Create the following custom fields in GHL > Settings > Custom Fields**

### **Contact Custom Fields**

| Field Name | Type | Purpose |
| --- | --- | --- |
| **Property ID** | Text | Primary linking key between websites, PDFs, CRM |
| Address (full) | Text | auto complete field from GHL |
| Property Street | Text | Preloaded from DM list |
| Property City | Text | — |
| Property State | Text | — |
| Property ZIP | Text | — |
| Lead Source (WildSafe) | Dropdown/Text | Attribution |
| Is Direct Mail Property | Checkbox | Mark if from DM list |
| Campaign / Mail Batch | Text | Optional campaign identifier |

---

# 3. **Direct Mail Contacts Import (GHL)**

Before launching:

1. Import CSV of all targeted properties.
2. Map fields:
    - Email (if known)
    - Address fields
    - **Property ID**
3. Apply a tag:
    
    ```
    wildsafe_dm_mailed
    
    ```
    
4. Ensure **Allow Duplicate Contacts = Off** (dedupe by email).

**Result:** When a homeowner submits a form, if the email matches → their contact updates; otherwise a new one is created with the correct Property ID.

---

# 4. **Pipeline Setup (GHL)**

### Create pipeline:

```
Wild-Safe Tank

```

### Add stages (in order):

1. **Mailed**
2. **Report Viewed** (optional)
3. **Report Downloaded**
4. **Consultation Requested**
5. **Qualified**
6. **Proposal Sent**
7. **Closed Won**
8. **Closed Lost**

---

# 5. **PDF Generation & Hosting**

### **5.1 Pre-generate PDFs**

Each property gets its own PDF:

```
WSD-0100.pdf
WSD-0101.pdf
...

```

These PDFs can be generated manually or via an automated HTML→PDF process (e.g., Puppeteer).

### **5.2 Hosting PDFs on reports subdomain**

In your **reports Next.js project**:

```
/public
   /pdfs
      WSD-0100.pdf
      WSD-0101.pdf

```

Everything in `/public` is automatically hosted via Vercel’s CDN.

### **5.3 Public Access URL structure**

```
https://reports.wildsafedefense.com/pdfs/[PropertyID].pdf

```

This predictable URL enables:

- Direct email linking
- Zero backend complexity
- Perfect integration with GHL workflows

---

# 6. **Report Page Implementation (Next.js)**

### The report site has routes like:

```
/pages/[propertyId].tsx

```

### On each page:

1. Parse property ID:

```jsx
const router = useRouter();
const { propertyId } = router.query; // e.g. "WSD-0100"

```

1. Embed the **GHL Report Download Form** with the ID appended:

```jsx
<iframe
  src={`https://formembedurl.com?property_id=${propertyId}`}
  style={{ width: "100%", height: "800px", border: "none" }}
/>

```

### Buttons on the report page:

### **A. Download Report**

- Opens the iframe with the GHL form
- Sends propertyId into GHL as a hidden field

### **B. Book Consultation**

Navigates user to:

```
https://wildsafedefense.com/get-protected?pid=WSD-0100

```

---

# 7. **Main Website Consultation Page (Next.js)**

### On `/get-protected` page:

1. Read `pid` from querystring
2. Append it to the GHL Consultation Form iframe:

```jsx
const router = useRouter();
const { pid } = router.query;

<iframe
  src={`https://GHL-consultation-form-url.com?property_id=${pid || ""}`}
  style={{ width: "100%", height: "950px", border: "none" }}
/>

```

Both forms now consistently feed Property ID into GHL.

---

# 8. **GHL Forms Configuration**

### For both forms:

- Add hidden field: **Property ID**
- Map that field to the **Property ID custom field** in contacts
- Ensure email + name are required

---

# 9. **GHL Workflow Setup**

## **Workflow A — Report Download**

**Trigger:**

`Form Submitted = Report Download Form`

**Actions:**

1. Set custom field → `Lead Source (WildSafe) = Report Download`
2. Set field → `Is Direct Mail Property = Yes` (if matching imported data)
3. Create or update the Opportunity:
    - Pipeline: WildSafe – Direct Mail Funnel
    - Stage: **Report Downloaded**
    - Opportunity name: `{{contact.full_name}} – {{contact.Property ID}}`
4. Tag contact:
    
    ```
    wildsafe_report_download
    
    ```
    
5. Send confirmation email:
    - Subject: “Your Wildfire Risk Report”
    - Body contains:
    
    ```
    https://reports.wildsafedefense.com/pdfs/{{contact.Property ID}}.pdf
    
    ```
    

---

## **Workflow B — Consultation Request**

**Trigger:**

`Form Submitted = Consultation Request Form`

**Branch Logic:**

### **If Property ID is present**

- Lead Source = "Consultation (Report)"
- Create/update Opportunity in same pipeline
- Stage: **Consultation Requested**
- Tag:
    
    ```
    wildsafe_consultation_report
    
    ```
    
- Notify internal team by email/SMS

### **If Property ID is empty**

- Lead Source = "Website Organic"
- Create new Opportunity
- Tag:
    
    ```
    wildsafe_consultation_organic
    
    ```
    

---

# 10. **Attribution Logic (Summary)**

Attribution uses:

- URL structure `/[PropertyID]`
- Query params `?pid=...`
- Hidden GHL fields for Property ID
- Workflows determining Lead Source
- Pre-imported DM contacts for matching

Leads can be identified as:

- **Direct Mail → Report Download → Consultation**
- **Direct Mail → Consultation (no download)**
- **Organic Consultation**

This satisfies all requirements from your project brief.

---

# 11. **Testing Checklist**

### On the report site:

- Load `/WSD-0100`
- Submit the Download form
- Check:
    - GHL contact created/updated
    - Property ID saved
    - Email delivered with correct PDF link
    - Opportunity in stage “Report Downloaded”

### On main site:

- Submit Consultation form with `?pid=WSD-0100`
- Check:
    - Stage = “Consultation Requested”
    - Lead Source = “Consultation (Report)”
    - PDF email not sent again

### Organic test:

- Visit `/consultation` with no PID
- Submit form
- Lead Source = “Website Organic”