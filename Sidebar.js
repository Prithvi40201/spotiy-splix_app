import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://lh3.googleusercontent.com/TIYD4goQF0qaQWIMgtCiLFk29zSXNsswPlW-ckZVEFCxrp1vy4naDMSNcniktzkB8I18vQ0H0jtG9-Iu9SoQcR7gdurdYiPNGlHPvRnZmzAgCyZfOr8dovkIR2_Xa-ZSWTTQUtslb1pagemvCOXWBH3OhasFnXs6uCXgxz4a30vI0mF6-vYNPqy2fKdpPMlYdiIgXVtBIOnZJHoFDeWy6BBiOGQaj9b5BxLsCSuwul5LEzK97d1E9xlTnzRIANqoLmCSD26cX_ICdli6PsWeZm_8emuOkdmFA5SokYCxOCBbmQs-IDFiCXeFt-QXl1cMELtM8czHjTUlWo1DYBfmbH0ywkXDGi1B70SuiL6LudGj9FY7lLswBhv6jNFakSrfjXkr0STLA4_Nz-qoaYZpaoqB4GXeGjboqwKqudI01fkvSOMqBn5U-M3FUPNX9-rruI-tusGAFF3LCdshVwjtiuM9dWDN5Vz_7hW1x4qz55P5--qtaoQnOsp0o_t0FsW-zVXUmIC0S-zupjS99Qi76ASIPIpxZezMtFazziJbboLunm4hNnqunVcHEUn5M_hynXQnNbR81ccgLB7WVEEY5AQNLnxhCbecwSC9KKfGMTELb2P_JaFrLeRLuD6a17esous1EXoaIb1QBMJKGfkiCIZHuXmd1YvYJCGXsxpn4a2lsdqkEAcWL_-YYJ91WQ=w968-h177-no?authuser=1"
      />
       <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
