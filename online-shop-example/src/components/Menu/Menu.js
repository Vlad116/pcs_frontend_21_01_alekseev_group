import React from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CartComponent from "./Cart/Cart";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const MenuComponent = ({ totalPrice, count, items }) => {
	const navigate = useNavigate()
	const username = localStorage.getItem('username')

	const logoutHandler = () => {
		if(username && localStorage.getItem('userId')) {
			localStorage.removeItem('username')
			localStorage.removeItem('userId');
			navigate('/login')
		}
	}

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Пример главной магазина
					</Typography>
					{totalPrice !== undefined && count !== undefined ?
						<>
							<Typography variant="p" component="p" sx={{ flexGrow: 4, paddingRight: 4 }} align={'right'}>
								{username && <b style={{paddingRight: '1vw'}}>{username}</b>}
								 Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
							</Typography><PopupState variant="popper" popupId="demo-popup-popper">
								{(popupState) => (
									<div>
										<Button variant="contained" sx={{ mr: 2 }} {...bindToggle(popupState)}>
											Корзина (<b>{count}</b>)
										</Button>
										<Popper
											{...bindPopper(popupState)}
											transition
										>
											{({ TransitionProps }) => (
												<Fade {...TransitionProps} timeout={350}>
													<Paper>
														{items.map(book => (
															<CartComponent {...book} />
														))}
													</Paper>
												</Fade>
											)}
										</Popper>
									</div>
								)}
							</PopupState>
						</>
						: null
					}
					{username 
						? <IconButton 
							aria-label="logout"
							onClick={logoutHandler}
							>
								<LogoutIcon />
							</IconButton> 
						:  <IconButton 
								aria-label="login"
								onClick={() => navigate('/login')}
							>
								<LoginIcon />
							</IconButton>
					}
				</Toolbar>
			</AppBar>
		</>
	)
}

export default MenuComponent