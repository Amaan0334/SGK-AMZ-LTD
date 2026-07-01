import { ShieldCheck, BadgeCheck, PackageCheck, Building2, Truck, Users } from "lucide-react";

const items = [
  {
    icon: <ShieldCheck className="text-[#C89B3C]" size={35} />,
    title: "Verified Business",
    text: "SGK AMZ LTD operates as a registered UK wholesale business.",
  },
  {
    icon: <BadgeCheck className="text-[#C89B3C]" size={35} />,
    title: "Authentic Products",
    text: "We source only genuine branded perfumes from trusted suppliers.",
  },
  {
    icon: <PackageCheck className="text-[#C89B3C]" size={35} />,
    title: "Quality Assurance",
    text: "Products are checked before dispatch to maintain high standards.",
  },
  {
    icon: <Truck className="text-[#C89B3C]" size={35} />,
    title: "Reliable Delivery",
    text: "Professional order processing and secure packaging.",
  },
  {
    icon: <Building2 className="text-[#C89B3C]" size={35} />,
    title: "Wholesale Supplier",
    text: "Serving retailers and Amazon business customers.",
  },
  {
    icon: <Users className="text-[#C89B3C]" size={35} />,
    title: "Customer Support",
    text: "Responsive support for wholesale and partnership enquiries.",
  },
];

const Verification = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Business Verification & Compliance
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              {item.icon}

              <h3 className="font-bold text-xl mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Verification;