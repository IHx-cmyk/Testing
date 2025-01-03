import  '../styles/Navbar.css'

function Navbar() {
  return (
       <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>M. Najih I</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutors">Tutors</a></li>
                    <li><a href="#partners">Partners</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://wa.me/+628818471170" className="tbl-biru">Hub Me</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
