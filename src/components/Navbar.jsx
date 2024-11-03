const Navbar = () => {
  const matters = [
    { name: "SSL", href: "Sintaxis" },
    { name: "Adp", href: "AdministraciondeProyectos" }
  ];
  return (
    <nav className="max-h-max w-full fixed top-0 bg-inherit text-center p-6">
      {matters.map((matter, index) => (
        <a 
          key={index} // clave única para cada elemento
          className="text-lg font-medium mx-2 text-white" 
          href={matter.href} // href dinámico
        >
          {matter.name}  {/* Texto dinámico */}
        </a>
      ))}
    </nav>
  )
}

export default Navbar