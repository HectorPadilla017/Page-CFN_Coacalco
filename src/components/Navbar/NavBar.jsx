import React from 'react';
import Nav from './ContainerNavBar/Nav'
import Drawer from './ContainerNavBar/Drawer'
import Container from '@material-ui/core/Container';

export default function NavBar() {
  const [open, setOpen] = React.useState(false)
    const actionOpen = () => {
        setOpen(!open)
    }
  return (
    <Container disableGutters maxWidth="xs">
      <Nav actionOpen={actionOpen}/>
      <Drawer
        open={open}
        onClose={actionOpen}
      />
    </Container>
  );
}
