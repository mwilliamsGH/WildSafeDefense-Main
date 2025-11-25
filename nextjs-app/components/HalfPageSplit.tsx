interface HalfPageSplitProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftImage?: string;
  rightImage?: string;
  leftBg?: string;
  rightBg?: string;
  reverse?: boolean;
}

export default function HalfPageSplit({
  leftContent,
  rightContent,
  leftImage,
  rightImage,
  leftBg = "bg-background",
  rightBg = "bg-card",
  reverse = false,
}: HalfPageSplitProps) {
  const leftSection = leftImage ? (
    <div
      className="bg-cover bg-center min-h-[300px] sm:min-h-[400px] lg:min-h-screen"
      style={{ backgroundImage: `url(${leftImage})` }}
    ></div>
  ) : (
    <div className={`${leftBg} px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-32 flex items-center justify-center`}>
      {leftContent}
    </div>
  );

  const rightSection = rightImage ? (
    <div
      className="bg-cover bg-center min-h-[300px] sm:min-h-[400px] lg:min-h-screen"
      style={{ backgroundImage: `url(${rightImage})` }}
    ></div>
  ) : (
    <div className={`${rightBg} px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex items-center justify-center`}>
      {rightContent}
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2">
      {reverse ? (
        <>
          <div className="order-2 lg:order-1">{rightSection}</div>
          <div className="order-1 lg:order-2">{leftSection}</div>
        </>
      ) : (
        <>
          {leftSection}
          {rightSection}
        </>
      )}
    </div>
  );
}
