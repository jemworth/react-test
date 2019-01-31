'use strict';
const {
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon
} = window['material-ui'];
const styles => ({

});
}
class Index extends React.Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return 
     
        <div className={classes.root}>
          <CssBaseline />
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h4" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            <Icon className={classes.icon}>fingerprint</Icon>
            Super Secret Password
          </Button>
        </div>
    
  }
