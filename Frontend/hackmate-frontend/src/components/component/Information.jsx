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
        Welcome to HackMate, your ultimate destination for finding the perfect hackathon partner! Gone are the days of struggling to assemble a team or feeling lost in the sea of potential collaborators. With HackMate, we've streamlined the process, making it easier than ever to connect with like-minded individuals who share your passion for innovation and teamwork.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            <p className="text-5xl font-bold text-blue-900">192</p>
            <p className="mt-2 text-xl font-semibold">Countries</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">479</p>
            <p className="mt-2 text-xl font-semibold">Users</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">2093</p>
            <p className="mt-2 text-xl font-semibold">Teams</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-900">147</p>
            <p className="mt-2 text-xl font-semibold">Organizers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

