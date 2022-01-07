import { useCallback, useState } from 'react';
import { DataGrid } from '../../components';
import { useGetTradesQuery } from "../../services";

export const Blotter: React.FC = (): JSX.Element => {
    const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false);
    const { data } = useGetTradesQuery(undefined, { pollingInterval: 30000 })
    const rowClickHandler = useCallback(() => {
        //implement
    }, []);

    return (
        <div>
            <DataGrid
                showNoRowsOverlay={showNoRowsOverlay}
                size={{ width: "100%", height: 1000 }}
                gridData={[{ name: 'typescript' }]}
                colDef={[{ field: 'name' }]}
                rowClickHandler={rowClickHandler}
            ></DataGrid>
        </div>
    );
};
