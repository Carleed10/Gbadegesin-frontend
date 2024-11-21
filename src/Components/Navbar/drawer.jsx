import { Drawer } from "@mui/material";
// import logo from "../../Images/kik-logo.png";
import { Link } from "react-router-dom";
import { navigationLinks } from "./constants";
import { MdCancel } from "react-icons/md";

export default function TemporaryDrawer({ onClose, open }) {
  return (
    <div>
      <Drawer
        onClose={onClose}
        open={open}
        anchor="left"
        PaperProps={{
          sx: {
            width : "100%",
            height: "100vh", // Set the height of the Drawer to 50% of the viewport height
          },
        }}
      >
        <div
          className={`w-full h-fit p-5 bg-white text-black`} // Updated to use full width and height
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-14"> </div>

            <div className="cursor-pointer" onClick={onClose}>
              <MdCancel size={25} />
            </div>
          </div>
          <ul className="grid w-full mt-4">
            {navigationLinks.map((data, index) => (
              <li className="w-full p-2 cursor-pointer" key={index}>
                <Link
                  onClick={onClose}
                  className="font-semibold text-md text-black"
                  to={data.path}
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
