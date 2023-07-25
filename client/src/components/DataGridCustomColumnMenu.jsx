import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from '@mui/x-data-grid';

const DataGridCustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open, colDef } = props;
  return (
    <GridColumnMenuContainer
      open={open}
      hideMenu={hideMenu}
      currentColumn={currentColumn}
    >
      <GridColumnMenuHideItem
        onClick={hideMenu}
        column={currentColumn}
        colDef={colDef}
      />
      <GridColumnMenuFilterItem
        onClick={hideMenu}
        column={currentColumn}
        colDef={colDef}
      />
    </GridColumnMenuContainer>
  );
};

export default DataGridCustomColumnMenu;
