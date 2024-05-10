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
import { createSession, getSessions, signOut } from "../../api/sessions";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const { updateChatSessions, chatSessions, jwt } = React.useContext(MyContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [chatSession, setChatSession] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSelectedChat = (chatSession) => {
    return chatSession ? (
      <ChatPage chatSession={chatSession} />
    ) : (
      <ChatPage chatSession={chatSessions[chatSessions.length - 1]} />
    );
  };

  const handleCreateNewChat = async () => {
    const response = await createSession({ jwt: jwt });
    if (response !== null) {
      setChatSession(response);
    }
  };

  const handleSignOut = async () => {
    const response = await signOut({ jwt: jwt });
    if(response.statusCode === 200) {
      navigate("/");
    }
  }

  React.useEffect(() => {
    if (!jwt) return;
    const initialFetchChatSessions = async () => {
      try {
        const response = await getSessions({ jwt: jwt });
        updateChatSessions(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    initialFetchChatSessions();
  }, [jwt]);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            style={{ background: "#6949FF" }}
          >
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
            <ReusableButton
              text="Start a new chat"
              onClick={handleCreateNewChat}
            />
            <Divider />
            <List sx={{ minHeight: "80vh" }}>
              {chatSessions.map((session) => (
                <ListItem
                  key={session.id}
                  onClick={() => {
                    console.log(session);
                    setChatSession(session);
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
                    {session.messages.length > 0
                      ? session.messages[session.messages.length - 1].content
                      : "New Chat"}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <ReusableButton
              text="SignOut"
              onClick={handleSignOut}
            />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {handleSelectedChat(chatSession)}
          </Main>
        </Box>
      )}
    </React.Fragment>
  );
}
