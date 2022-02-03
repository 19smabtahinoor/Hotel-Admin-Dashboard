import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as React from 'react';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function BreadCrumb(props) {

    const path =  window?.location?.pathname?.split('/');
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                
                {/* <Link underline="hover" color="inherit" href="/">
                    
                </Link> */}

                {path?.slice(1,3)?.map(item => (
                    <>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/getting-started/installation/"
                            sx={{fontSize:'14px'}}
                        >
                            {item?.toUpperCase()}
                        </Link>
                    </>
                ))}
               
                {/* <Link
                    underline="hover"
                    color="text.primary"
                    href="/components/breadcrumbs/"
                    aria-current="page"
                >
                    Breadcrumbs
                </Link>  */}
            </Breadcrumbs>
        </div>
    );
}

export default BreadCrumb;