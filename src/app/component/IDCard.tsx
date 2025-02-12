import Image from "next/image"
import { Bell, Home, Settings, User, Download, Share2, Edit, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-purple-800">Student Portal</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r bg-white h-[calc(100vh-57px)] p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Quick Actions */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download ID Card
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Details
                </Button>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Information
                </Button>
              </div>
            </div>

            {/* ID Card Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Student Information</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Name</span>
                        <span className="font-medium">Bikram Singh</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Roll Number</span>
                        <span className="font-medium">00254242</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Campus</span>
                        <span className="font-medium">Main</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Center</span>
                        <span className="font-medium">Governer House Karachi</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Schedule</span>
                        <span className="font-medium">Monday - 02:00 PM - 05:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 text-sm">Batch</div>
                        <div className="text-2xl font-bold">1</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 text-sm">Status</div>
                        <div className="text-2xl font-bold">Active</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 text-sm">City</div>
                        <div className="text-2xl font-bold">Karachi</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 text-sm">Distance Learning</div>
                        <div className="text-2xl font-bold">No</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* ID Card Display */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">ID Card Preview</h3>
                    {/* Front Side */}
                    <div className="border border-blue-300 rounded-lg overflow-hidden bg-white relative mb-4">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <Image
                            src={'/images/gov.png'}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="text-green-700"
                          />
                          <Image
                            src={'/images/download.png'}
                            alt="Profile Photo"
                            width={100}
                            height={120}
                            className="rounded"
                          />
                        </div>

                        <div className="space-y-2 mt-4">
                          <div className="flex gap-2">
                            <span className="text-sky-500">Name:</span>
                            <span>Bikram Singh</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-sky-500">Roll No:</span>
                            <span>00254242</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-sky-500">City:</span>
                            <span>Karachi</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-sky-500">Center:</span>
                            <span>Governer House Karachi</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-sky-500">Campus:</span>
                            <span>Main</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <p className="text-center text-sky-500">Authorized Signature</p>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="border border-blue-300 rounded-lg overflow-hidden bg-white relative p-4">
                      <div className="flex justify-between items-start">
                        <div className="w-32 h-32 bg-gray-900 rounded-lg" />
                        <div className="bg-gray-500 text-white px-3 py-1 rounded">Q2</div>
                      </div>
                      <div className="mt-4 text-right space-y-1">
                        <p className="text-blue-800 font-medium">Governor Sindh</p>
                        <p className="text-blue-800 font-medium">Kamran Khan</p>
                        <p className="text-blue-800 font-medium">Tessori's initiative for</p>
                        <p className="text-blue-800 font-medium">Artificial Intelligence,</p>
                        <p className="text-blue-800 font-medium">Web 3.0 & Metaverse</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

