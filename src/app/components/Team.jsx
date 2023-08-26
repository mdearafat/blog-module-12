const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-blue-600">{role}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
    },
    {
      name: "Jane Smith",
      role: "Lead Designer",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl text-black mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
