'use client';

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export default function ContactSection() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { name, email, message } = contactDetails;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields must be filled out and not left blank.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactDetails),
      });

      if (response.ok) {
        setSuccess(true);
        setIsDialogOpen(true);
        setContactDetails({ name: "", email: "", message: "" });
      } else {
        console.error("Message submission failed:", await response.json());
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#613502] mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Address</h3>
                  <p className="text-gray-800">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-[#613502] mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Phone</h3>
                  <p className="text-gray-800">(303) 555-0105</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-[#613502] mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Email</h3>
                  <p className="text-gray-800">mail@example.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-4">Follow</h3>
              <div className="flex space-x-4">
                <FaFacebook className="text-[#613502]" />
                <FaInstagram className="text-[#613502]" />
                <FaTwitter className="text-[#613502]" />
                <FaYoutube className="text-[#613502]" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={contactDetails.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={contactDetails.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={contactDetails.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={4}
                required
              />

              <button
                type="submit"
                className="px-6 py-2 border border-[#613502] text-[#613502] hover:bg-[#613502] hover:text-white rounded-md transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {isDialogOpen && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Message Sent</DialogTitle>
                <DialogDescription>
                  Your message has been sent successfully! We will get back to you soon.
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="mt-4 px-4 py-2 bg-[#613502] text-white rounded"
                >
                  Close
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}