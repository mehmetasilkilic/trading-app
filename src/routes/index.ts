import { ConfirmationNumber, TableView } from "@mui/icons-material";
import Home from "@mui/icons-material/Home"
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const MAIN = "/" as const;
export const BLOTTER = "/blotter" as const;
export const TRADETICKET = "/tradeticket" as const;

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

export type RouteType = { label: string, icon: IconType, path: typeof MAIN | typeof BLOTTER | typeof TRADETICKET }
export const ROUTES: RouteType[] = [
    { label: "Home", path: MAIN, icon: Home },
    { label: "Trade Blotter", path: BLOTTER, icon: TableView },
    { label: "Home", path: TRADETICKET, icon: ConfirmationNumber },
]