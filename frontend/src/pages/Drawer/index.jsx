import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { ReactComponent as ReXProfile } from "../../assets/ReXProfile.svg";
import ChatPage from "../ChatPage";
import ReusableButton from "../../components/Button";
import { MyContext } from "../../context/context";
import { getSessions } from "../../api/sessions";
import Loading from "../../components/Loading";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ChatDrawer() {
  const [loading, setLoading] = React.useState(true);
  const { updateChatSessions, chatSessions, jwt } = React.useContext(MyContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchChatSessions = async () => {
      const response = await getSessions({ jwt: jwt });
      console.log(response);
      updateChatSessions(response);
    };
    fetchChatSessions();
    setLoading(true)
  }, []);

  React.useEffect(() => {
    setLoading(false)
  }, [chatSessions]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#6949FF" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <ReXProfile width="80px" height="90px" />
          <Typography variant="h6" noWrap component="div">
            ReX Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ReusableButton text="Start a new chat" />
        <Divider />
        <List>
          {chatSessions.map((session) => (
            <ListItem
              key={session.id}
              onClick={() => {
                console.log("Clicked me!");
              }}
            >
              <Typography
                noWrap
                sx={{
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the shadow properties as needed
                  },
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                {session.messages[session.messages.length - 1].content}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {(loading ? <Loading /> :
      <Main open={open}>
        <DrawerHeader />
        <ChatPage chatSession={chatSessions[chatSessions.length - 1]} />
      </Main>
      )}
    </Box>
  );
}
