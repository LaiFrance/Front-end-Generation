import React from 'react'
import { Box, Container, Typography } from '@mui/material'



function Footer() {


    return (
        <footer className="footer">
            <Container maxWidth="lg">
                <Box sx={{ py: 3 }}>
                    <Typography variant="body1" align="center" color="textSecondary" component="p">
                        © 2021 - Todos os direitos reservados
                    </Typography>
                </Box>
            </Container>
        </footer>
    )
    }

export default Footer
