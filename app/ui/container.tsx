export default function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  )
}
