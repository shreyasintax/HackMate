/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2wzdtFHGz3r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export function Information() {
  return (
    <div className="flex max-w-7xl mx-auto my-12">
      <div className="w-1/2">
        <img
          alt="Beachside hotel"
          className="object-cover w-full h-full"
          height="768"
          src="/svg.jpg"
          style={{
            aspectRatio: "799/768",
            objectFit: "cover",
          }}
          width="799"
        />
      </div>
      <div className="w-1/2 px-12">
        <h1 className="text-6xl font-bold text-blue-900">We Value TeamWork</h1>
        <p className="mt-6 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            <p className="text-5xl font-bold text-blue-900">192</p>
            <p className="mt-2 text-xl font-semibold">Countries</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">479</p>
            <p className="mt-2 text-xl font-semibold">Hotels</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">2093</p>
            <p className="mt-2 text-xl font-semibold">Rooms</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">10347</p>
            <p className="mt-2 text-xl font-semibold">Workers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

