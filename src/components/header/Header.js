import { Component } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export class Header extends Component {
    render() {
        const { menuItems } = this.props;

        const btns = menuItems.map((item, i) => {return (<Button key={i}>{item}</Button>)});
        
        return (
                <Grid container rowSpacing={1}>
                    <Grid item xs={11}>
                        <Stack spacing={2} direction="row">
                            {btns}
                        </Stack>
                    </Grid>
                    <Grid item xs={1}>
                        <Avatar style={{padding: 5}} alt="Qunt" src="https://lh3.googleusercontent.com/a/ACg8ocIJOQpmD033VmlKZ5zeaSszN7C9fAXjxZho7Ev60NIqQE2UCDY=s96-c-rg-br100"></Avatar>
                    </Grid>
                </Grid>
        )
    }
}