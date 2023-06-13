import {
  HiOutlineBookOpen,
  HiOutlineCamera,
  HiOutlineClipboardDocumentList,
  HiOutlinePhoto,
} from "react-icons/hi2";

export default function Features() {
  return (
    <div className="grr max-w-7xl pt-20 mx-auto text-center" id="features">
      <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
        Feel our features
      </h1>
      <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
        We provide you with the best features to make your life easier
      </h1>

      <section className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-5">
          <div className="p-4">
            <div className="h-full card shadow-2xl text-lg md:text-xl card-side bg-secondary text-primary-content flex items-start">
              <div className="card-body">
                <div className="justify-end card-actions items-center">
                  <div className="card bg-neutral text-primary flex-row p-4 items-center">
                    <span className="font-semibold px-3">Take from camera</span>
                    <HiOutlineCamera className="text-4xl" />
                  </div>
                </div>
                <p className="text-right">
                  You fell have disease at your skin? Take a photo and our
                  trained Machine Learning will help you to diagnose it. So you
                  can get the right treatment as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="h-full card shadow-2xl text-lg md:text-xl card-side bg-secondary text-primary-content flex items-start">
              <div className="card-body">
                <div className="justify-start card-actions items-center">
                  <div className="card bg-neutral text-primary flex-row p-4 items-center">
                    <HiOutlinePhoto className="text-4xl" />
                    <span className="font-semibold px-3">
                      Upload from gallery
                    </span>
                  </div>
                </div>
                <p className="text-left">
                  You have a problem with your camera? Don't worry. you can upload the image
                  from you gallery.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="h-full card shadow-2xl text-lg md:text-xl card-side bg-secondary text-primary-content flex items-start">
              <div className="card-body">
                <div className="justify-end card-actions items-center">
                  <div className="card bg-neutral text-primary flex-row p-4 items-center">
                    <span className="font-semibold px-3">
                      Read the articles
                    </span>
                    <HiOutlineBookOpen className="text-4xl" />
                  </div>
                </div>
                <p className="text-right">
                  Explore your knowledge about healthy with reading the article in our app.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="h-full card shadow-2xl text-lg md:text-xl card-side bg-secondary text-primary-content flex items-start">
              <div className="card-body">
                <div className="justify-start card-actions items-center">
                  <div className="card bg-neutral text-primary flex-row p-4 items-center">
                    <HiOutlineClipboardDocumentList className="text-4xl" />
                    <span className="font-semibold px-3">Saved history</span>
                  </div>
                </div>
                <p className="text-left">
                  Monitoring your history of disease and treatment. So you can
                  know your health condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
