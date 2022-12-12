import { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface Icons {
  id: number;
  Component: FC<{}>;
  path: string;
}

export const soacialIcons: Array<Icons> = [
  { id: 0, path: "https://www.facebook.com/", Component: FacebookIcon },
  { id: 1, path: "https://www.instagram.com/", Component: InstagramIcon },
  { id: 2, path: "https://twitter.com/", Component: TwitterIcon },
  { id: 3, path: "https://www.youtube.com/", Component: YouTubeIcon },
];
