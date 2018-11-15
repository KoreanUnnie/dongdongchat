import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
		const { name, online, numberOfUsers } = this.props
		const onlineText = online ? 'online':'offline'
		const drawerRender = (
		 <div id="side-bar">
				 <div className="heading">
					 <div className="app-name">Zanjo Chat <FAChevronDown /></div>
					 <div className="menu">
						 <FAMenu />
					 </div>
				 </div>
				 <div className="search">
					 <i className="search-icon"><FASearch /></i>
					 <input placeholder="Search" type="text"/>
					 <div className="plus"></div>
				 </div>
				 <div
					 className="users"
					 ref='users'
					 onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>

					 {
					 chats.map((chat)=>{
						 if(chat.name){
							 const lastMessage = chat.messages[chat.messages.length - 1];
							 const user = chat.users.find(({name})=>{
								 return name !== this.props.name
							 }) || { name:"Community" }
							 const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''
							 return(
							 <div
								 key={chat.id}
								 className={`user ${classNames}`}
								 onClick={ ()=>{ setActiveChat(chat) } }
								 >
								 <div className="user-photo">{user.name[0].toUpperCase()}</div>
								 <div className="user-info">
									 <div className="name">{user.name}</div>
									 {lastMessage && <div className="last-message">{lastMessage.message}</div>}
								 </div>

							 </div>
						 )
						 }

						 return null
					 })
					 }

				 </div>
				 <div className="current-user">
					 <span>{user.name}</span>
					 <div onClick={()=>{logout()}} title="Logout" className="logout">
						 <MdEject/>
					 </div>
				 </div>
			 </div>
	 )

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {name} <i>{onlineText}</i> {numberOfUsers}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
