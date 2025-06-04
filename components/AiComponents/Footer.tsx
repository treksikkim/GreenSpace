import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={cn("bg-primary text-white")}>
      <div className={cn("container mx-auto px-4 py-12")}>
        <div className={cn("text-center mb-8")}>
          <h2 className={cn("text-2xl font-bold mb-2")}>
            Ready To Design Your Dream Home?
          </h2>
          <p className={cn("text-teal-100")}>Booking & Consultation</p>
        </div>

        <div className={cn("grid md:grid-cols-5 gap-8 text-sm")}>
          <div>
            <h3 className={cn("font-semibold mb-4")}>Home</h3>
            <ul className={cn("space-y-2 text-teal-100")}>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Modular Kitchen Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Wardrobe Modular
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Kitchens
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Bedroom Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Living Room Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Dining Room Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  1 BHK Interior Designs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("font-semibold mb-4")}>Space Saving Designs</h3>
            <ul className={cn("space-y-2 text-teal-100")}>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Study Room/Cafe
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Refer & Earn
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  3 BHK Interior Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Interior Designers in Hyderabad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("font-semibold mb-4")}>Design Gallery</h3>
            <ul className={cn("space-y-2 text-teal-100")}>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Wardrobe Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Kids Bedroom Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Bathroom Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  2 BHK Interior Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Interior Designers in Chennai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("font-semibold mb-4")}>Recent Projects</h3>
            <ul className={cn("space-y-2 text-teal-100")}>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Experience Centres
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Customer Care
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  DC Signature (New)
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  DC Premium
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Home Office Designs
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Interior Designers In Mumbai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("font-semibold mb-4")}>Support</h3>
            <ul className={cn("space-y-2 text-teal-100")}>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={cn("hover:text-white")}>
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "border-t border-teal-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          )}
        >
          <div className={cn("text-teal-100 text-sm")}>
            © 2025 Green Space Interior.
            <Link href="#" className={cn("hover:text-white ml-2")}>
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className={cn("hover:text-white ml-2")}>
              Terms of Use
            </Link>
          </div>
          <div className={cn("text-teal-100 text-sm mt-4 md:mt-0")}>
            Digital Partner{" "}
            <Link
              target="__blank"
              href="https://ommdigitalsolution.com/"
              className="underline"
            >
              OMM DIGITAL Pvt Ltd
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
