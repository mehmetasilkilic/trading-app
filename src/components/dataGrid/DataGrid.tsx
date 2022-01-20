import { styled, useTheme } from "@mui/material";
import { ColDef, GridApi, RowClickedEvent } from "ag-grid-community"
import { AgGridReact } from "ag-grid-react";
import { useState, useEffect } from "react"

const GridStyledWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(2, 1),
    justifyContent: "center",
}));

interface DataGridProps<T> {
    showNoRowsOverlay?: boolean;
    size: { height: number | string; width: number | string }
    gridData: T[];
    colDef: ColDef[];
    rowClickHandler?: (event: RowClickedEvent) => void;
}

export const DataGrid = <T,>({
    showNoRowsOverlay,
    size,
    gridData,
    colDef,
    rowClickHandler = undefined,
}: DataGridProps<T>): JSX.Element => {
    const [gridApi, setGridApi] = useState<GridApi>();
    const [gridColumnApi, setgridColumnApi] = useState(null);
    const { palette } = useTheme();
    const onGridReady = (params: any) => {
        setGridApi(params.api);
        setgridColumnApi(params.columnApi);
    }

    useEffect(() => {
        if (showNoRowsOverlay) {
            gridApi?.showNoRowsOverlay();
        }
    }, [gridApi, showNoRowsOverlay]);

    return (
        <GridStyledWrapper>
            <div
                className={`${palette.mode === "dark"
                    ? "ag-theme-alpine-dark"
                    : "ag-theme-alpine"
                    }`}
                style={{ ...size }}
            >
                <AgGridReact
                    rowData={gridData}
                    onGridReady={onGridReady}
                    rowSelection="single"
                    columnDefs={colDef}
                    defaultColDef={{
                        resizable: true,
                        filter: true,
                    }}
                    onRowClicked={rowClickHandler}
                >
                </AgGridReact>
            </div>
        </GridStyledWrapper>
    )
}
