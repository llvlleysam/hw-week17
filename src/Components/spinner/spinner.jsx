import React from 'react';


export function SvgSpinnersBlocksShuffle2(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><rect width={10} height={10} x={1} y={1} fill="currentColor" rx={1}><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"></animate></rect><rect width={10} height={10} x={1} y={13} fill="currentColor" rx={1}><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"></animate></rect></svg>);
}





export function SvgSpinnersBarsScaleFade(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 24 24" {...props}><rect width={6} height={14} x={1} y={4} fill="white"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={9} y={4} fill="white" opacity={0.4}><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;0.2"></animate></rect><rect width={6} height={14} x={17} y={4} fill="white" opacity={0.3}><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5"></animate><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;0.2"></animate></rect></svg>);
}





export function SvgSpinners3DotsBounce(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><circle cx={4} cy={12} r={3} fill="white"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></animate></circle><circle cx={12} cy={12} r={3} fill="white"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></animate></circle><circle cx={20} cy={12} r={3} fill="white"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"></animate></circle></svg>);
}