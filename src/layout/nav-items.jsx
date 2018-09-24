// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom';
export const navigationList_A = (
    <div>
        <Link to="/">
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to="Active">
            <ListItem button>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Active" />
            </ListItem>
        </Link>
        {/* <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem> */}
    </div>
);

