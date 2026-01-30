"use client"

export function VideoShowcase() {
  const videos = [
    { id: "EC5w8TeGlWE", title: "Bathroom" },
    { id: "jRXKR_Gfwt0", title: "Kitchen" },
    { id: "Z7qvoPJ1AKE", title: "Living Room" },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-white text-center mb-12 font-serif">
          Craftsmanship <span className="text-[#f24d39] italic">in Motion</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="aspect-video bg-gray-900">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                title={video.title}
                className="w-full h-full"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
