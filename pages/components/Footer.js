export default function Footer() {
  return (
    <footer className="bg-gray-500 px-6">
      <div className="flex justify-evenly">
        <div>
          <h4 className="font-bold text-lg tracking-wide ">Hours</h4>
          <p className="text-md">Mon - Fri<br/><span className="text-sm">9AM - 5PM</span></p><hr/>
          <p className="text-md">Sat - Sun<br/> <span className="text-sm">9AM - 12PM</span></p>
        </div>
        <div>
          <h4 className="font-bold text-lg tracking-wide ">Contact Us</h4>
          <p className="text-md">
            651 McGregor Side Rd
            <br />
            Sarnia, ON N7S 4T1
            <br />
            <br/>
            (519) 542-9444
          </p>
        </div>
      </div>
      <hr />
      <p className="text-center">&copy; 1996 by Simplicity</p>
    </footer>
  );
}
