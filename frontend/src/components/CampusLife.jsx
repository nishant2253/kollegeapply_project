import { Users, Trophy, Globe } from "lucide-react";

export default function CampusLife() {
  return (
    <section id="campus" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Vibrant Campus Life
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience a diverse and inclusive community with hundreds of
              student organizations, state-of-the-art facilities, and endless
              opportunities for growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">
                    300+ Student Organizations
                  </h4>
                  <p className="text-sm text-gray-600">
                    Find your community and pursue your passions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">
                    NCAA Division I Athletics
                  </h4>
                  <p className="text-sm text-gray-600">
                    Support our teams and compete at the highest level.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">
                    Study Abroad Programs
                  </h4>
                  <p className="text-sm text-gray-600">
                    Explore the world with programs in 50+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop"
                alt="activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
