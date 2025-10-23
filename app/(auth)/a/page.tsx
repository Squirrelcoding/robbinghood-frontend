"use client";

import { SciChartReact } from "scichart-react";
import { drawExample } from "../../(default)/drawExample";
import { appTheme } from "../../../theme";
import * as React from "react";
import commonClasses from "../../css/Examples.module.scss";


export default function A() {
	return 	  <SciChartReact initChart={drawExample} className={commonClasses.ChartWrapper} />
}