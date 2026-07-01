import { Building2, Globe, Package, BadgeCheck, Landmark, Briefcase } from "lucide-react";

const businessInfo = [
  {
    icon: <Building2 size={28} className="text-[#C89B3C]" />,
    title: "Company",
    value: "SGK AMZ LTD",
  },
  {
    icon: <Globe size={28} className="text-[#C89B3C]" />,
    title: "Marketplace",
    value: "Amazon UK",
  },
  {
    icon: <Package size={28} className="text-[#C89B3C]" />,
    title: "Products",
    value: "Premium Branded Perfumes",
  },
  {
    icon: <Briefcase size={28} className="text-[#C89B3C]" />,
    title: "Business Type",
    value: "Wholesale Supplier",
  },
  {
    icon: <Landmark size={28} className="text-[#C89B3C]" />,
    title: "Country",
    value: "United Kingdom",
  },
  {
    icon: <BadgeCheck size={28} className="text-[#C89B3C]" />,
    title: "Business Status",
    value: "Active",
  },
];

const BusinessInfo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Business Information
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >
              {item.icon}

              <h3 className="text-xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessInfo;