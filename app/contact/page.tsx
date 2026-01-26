"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/PhoneInput";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    access_key: "ba1bee60-5ef3-4a04-89e2-5d38473963a5",
    fullName: "",
    email: "",
    mobile: "",
    message: "",
    preferredTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [value, setValue] = useState();

  async function onSubmit(data: {
    fullName: string;
    email: string;
    mobile: string;
    message: string;
    preferredTime: string;
  }) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("We have received your message. Thank you!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          access_key: "3b29dbb8-16a3-497c-ad04-217ef4a36870",
          fullName: "",
          email: "",
          mobile: "",
          message: "",
          preferredTime: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Error submitting the form. Please try again later.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  }

  console.log("formData", formData);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Ready to start your Australian migration journey? Get in touch with
            our expert team today.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      await onSubmit({
                        fullName: formData.fullName,
                        email: formData.email,
                        mobile: formData.mobile,
                        message: formData.message,
                        preferredTime: formData.preferredTime,
                      });
                    }}
                    className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mobile *
                      </label>
                      <PhoneInput
                        value={formData.mobile}
                        onChange={(val) => handleInputChange("mobile", val)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Way To Contact
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("preferredTime", value)
                        }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred Communication" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="call">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">Whatsapp</SelectItem>
                          <SelectItem value="any">Any</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Contact Time
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("preferredTime", value)
                        }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (9AM - 12PM)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (12PM - 5PM)
                          </SelectItem>
                          <SelectItem value="evening">
                            Evening (5PM - 8PM)
                          </SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="w-full h-32"
                        placeholder="Tell us about your migration goals and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 py-3">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8">
              {/* Office Info */}
              <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Office Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sydney, Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        +61 401 560 785
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@365migrationhub.com.au
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Hours
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Mon–Fri: 9AM–5PM
                        <br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Find Us</h3>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Interactive Map Placeholder</p>
                </div>
              </div> */}

              {/* Quick Actions */}
              {/* <div className="glass p-8 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-white/5 border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                    Book Online Consultation
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Migration Guide
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Schedule Phone Call
                  </Button>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
