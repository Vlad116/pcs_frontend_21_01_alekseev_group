import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase';
import { Box, ToggleButton, ToggleButtonGroup, Toolbar } from '@mui/material';

// import { Input, Menu } from 'semantic-ui-react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('sm')]: {
		width: '15ch',
		'&:focus': {
		  width: '30ch',
		},
	  },
	},
  }));

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
//   <Menu secondary>
	<Box sx={{ flexGrow: 1 }}>
		<Toolbar>
			<ToggleButtonGroup
				color="primary"
				value={filterBy}
				size="small"
				exclusive
				onChange={setFilter}
			>
				<ToggleButton value="all">Все</ToggleButton>
				<ToggleButton value="price_high">Цена (дорогие)</ToggleButton>
				<ToggleButton value="price_low">Цена (дешевые)</ToggleButton>
				<ToggleButton value="author">Автор</ToggleButton>
			</ToggleButtonGroup>
			<Search>
				<SearchIconWrapper>
				<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
				placeholder="Введите запрос..."
				inputProps={{ 'aria-label': 'search' }}
				onChange={e => setSearchQuery(e.target.value)}
				value={searchQuery}
				/>
			</Search>
		</Toolbar>
		{/* <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите запрос..."
      /> */}
	</Box>
    // <Menu.Item
    //   active={filterBy === 'all'}
    //   onClick={setFilter.bind(this, 'all')}>
    //   Все
    // </Menu.Item>
    // <Menu.Item
    //   active={filterBy === 'price_high'}
    //   onClick={setFilter.bind(this, 'price_high')}>
    //   Цена (дорогие)
    // </Menu.Item>
    // <Menu.Item
    //   active={filterBy === 'price_low'}
    //   onClick={setFilter.bind(this, 'price_low')}>
    //   Цена (дешевые)
    // </Menu.Item>
    // <Menu.Item
    //   active={filterBy === 'author'}
    //   onClick={setFilter.bind(this, 'author')}>
    //   Автор
    // </Menu.Item>
    // <Menu.Item>
    //   <Input
    //     icon="search"
    //     onChange={e => setSearchQuery(e.target.value)}
    //     value={searchQuery}
    //     placeholder="Введите запрос..."
    //   />
    // </Menu.Item>
//   </Menu>
);

export default Filter;
