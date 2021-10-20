import React from 'react';

const bgGridImg = 'https://i.postimg.cc/t4Dh5Xbf/Rectangle.png';
const bgGridSmallImg = 'https://i.postimg.cc/qMXN2t0M/small-Grid-Image-2.png';

export function BgShapeLeftTop() {
  return (
    <div
      className="w-40 absolute md:hidden xs:hidden"
      style={{
        top: -30,
        left: -35,
        pointerEvents: 'none',
      }}
    >
      <svg
        width="111"
        height="87"
        viewBox="0 0 111 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="38" cy="14" r="73" fill="url(#paint0_linear_148:1006)" />
        <defs>
          <linearGradient
            id="paint0_linear_148:1006"
            x1="-5.11409"
            y1="-40.1376"
            x2="75.2349"
            y2="78.6711"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5AC694" />
            <stop offset="1" stopColor="#5AC694" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BgShapeCenter() {
  return (
    <div className="w-full top-0 md:hidden xs:hidden block absolute left-0  overflow-hidden max-h-screen pt-20"
    style={{minHeight:670}}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 780" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
        <path fillRule="evenodd" clip-rule="evenodd" d="M1439.78 0H0V780H1439.78V74.1762L1440 74.0007L1439.78 73.6572V0ZM1438.88 2.13408V73.6616L1403.4 101.922V40.6775L1438.88 2.13408ZM1438.88 74.8908L1403.4 103.151V158.645L1438.88 135.449V74.8908ZM1438.88 136.608L1403.4 159.805V209.368L1438.88 191.072V136.608ZM1402.5 160.391V209.83L1371.15 225.996V180.887L1402.5 160.391ZM1402.5 210.932L1371.15 227.098V270.858L1402.5 258.156V210.932ZM1402.5 259.22L1371.15 271.922V319.44L1402.5 312.512V259.22ZM1370.25 272.286V319.639L1344.71 325.283V282.633L1370.25 272.286ZM1370.25 320.658L1344.71 326.302V368.094L1370.25 366.213V320.658ZM1370.25 367.214L1344.71 369.096V408.267L1370.25 408.503V367.214ZM1343.81 369.162V408.259L1322.17 408.06V370.755L1343.81 369.162ZM1343.81 409.259L1322.17 409.06V448.592L1343.81 451.381V409.259ZM1343.81 452.388L1322.17 449.599V488.141L1343.81 495.312V452.388ZM1321.28 449.483V487.843L1320.82 487.692H1278.6V449.413H1320.73L1321.28 449.483ZM1320.69 488.692H1278.6V526.969H1320.85L1321.28 527.178V488.886L1320.69 488.692ZM1321.28 528.27L1320.66 527.969H1278.6V566.244H1320.89L1321.28 566.524V528.27ZM1277.7 527.969V566.244H1230.62V527.969H1277.7ZM1277.7 567.244H1230.62V605.522H1277.7V567.244ZM1277.7 606.522H1230.62V651.019L1230.88 651.352H1277.7V606.522ZM1229.72 605.522V567.244H1181.65V605.522H1229.72ZM1181.65 606.522H1229.72V651.352H1181.82L1181.65 651.122V606.522ZM1180.75 605.522V567.244H1132.68V605.522H1180.75ZM1132.68 606.522H1180.75V651.352H1132.82L1132.68 651.14V606.522ZM1131.78 605.522V567.244H1084.68V605.522H1131.78ZM1084.68 606.522H1131.78V651.352H1084.81L1084.68 651.148V606.522ZM1083.79 605.522V567.244H1036.71V605.522H1083.79ZM1036.71 606.522H1083.79V651.352H1036.81L1036.71 651.166V606.522ZM1035.81 605.522V567.244H987.739V605.522H1035.81ZM987.739 606.522H1035.81V651.352H987.818L987.739 651.183V606.522ZM986.842 605.522V567.244H939.753V605.522H986.842ZM939.753 606.522H986.842V651.352H939.819L939.753 651.194V606.522ZM938.855 605.522V567.244H890.778V605.522H938.855ZM890.778 606.522H938.855V651.352H890.829L890.778 651.209V606.522ZM889.88 605.522V567.244H842.802V605.522H889.88ZM842.802 606.522H889.88V651.352H842.836L842.802 651.23V606.522ZM841.905 605.522V567.244H793.825V605.522H841.905ZM793.825 606.522H841.905V651.352H793.845L793.825 651.251V606.522ZM792.927 605.522V567.244H743.88V605.522H792.927ZM743.88 606.522H792.927V651.352H743.884L743.88 651.286V606.522ZM742.982 605.522V567.244H694.916V605.522H742.982ZM694.916 606.522H742.982V651.324L742.984 651.352H694.914L694.916 651.324V606.522ZM694.019 605.522V567.244H644.973V605.522H694.019ZM644.973 606.522H694.019V651.286L694.014 651.352H644.973V606.522ZM644.076 605.522V567.244H596.007V605.522H644.076ZM596.007 606.522H644.076V651.251L644.056 651.352H596.007V606.522ZM595.11 605.522V567.244H548.02V605.522H595.11ZM548.02 606.522H595.11V651.23L595.076 651.352H548.02V606.522ZM547.122 605.522V567.244H499.056V605.522H547.122ZM499.056 606.522H547.122V651.209L547.071 651.352H499.056V606.522ZM498.158 605.522V567.244H451.057V605.522H498.158ZM451.057 606.522H498.158V651.194L498.092 651.352H451.057V606.522ZM450.16 605.522V567.244H402.102V605.522H450.16ZM402.102 606.522H450.16V651.183L450.082 651.352H402.102V606.522ZM401.205 605.522V567.244H354.104V605.522H401.205ZM354.104 606.522H401.205V651.166L401.104 651.352H354.104V606.522ZM353.206 605.522V567.244H306.118V605.522H353.206ZM306.118 606.522H353.206V651.148L353.079 651.352H306.118V606.522ZM305.221 605.522V567.244H257.159V605.522H305.221ZM257.159 606.522H305.221V651.14L305.08 651.352H257.159V606.522ZM256.262 605.522V567.244H208.191V605.522H256.262ZM208.191 606.522H256.262V651.123L256.089 651.352H208.191V606.522ZM207.294 605.522V567.244H160.198V605.522H207.294ZM160.198 606.522H207.294V651.114L207.103 651.352H160.198V606.522ZM159.301 605.522V567.244H115.639V605.522H159.301ZM115.639 606.522H159.301V651.297L159.253 651.352H115.639V606.522ZM114.742 605.799V567.684L94.0988 583.016V625.455L114.742 605.799ZM94.0988 626.77L114.742 607.114V651.463L94.0988 674.469V626.77ZM93.2015 626.309V583.682L67.6585 602.653V650.631L93.2015 626.309ZM67.6585 651.946L93.2015 627.624V675.469L67.6585 703.935V651.946ZM66.7612 651.485V603.319L36.7888 625.58V680.025L66.7612 651.485ZM36.7888 681.34L66.7612 652.801V704.935L36.7888 738.337V681.34ZM35.8915 680.879V626.246L0.897314 652.237V714.2L35.8915 680.879ZM0.897314 715.491L0.908183 715.505L35.8915 682.194V739.337L0.897314 778.336V715.491ZM1278.6 606.522H1320.59L1321.28 607.151V651.352H1278.9L1278.6 651.005V606.522ZM1321.28 605.854L1320.92 605.522H1278.6V567.244H1320.62L1321.28 567.714V605.854ZM1322.17 607.977V651.636L1343.81 675.137V627.897L1322.17 607.977ZM1343.81 626.6L1322.17 606.68V568.358L1343.81 583.896V626.6ZM1344.71 628.724V676.112L1370.25 703.857V652.241L1344.71 628.724ZM1370.25 650.944L1344.71 627.427V584.54L1370.25 602.884V650.944ZM1371.15 653.067V704.831L1402.5 738.888V681.935L1371.15 653.067ZM1402.5 680.638L1371.15 651.77V603.529L1402.5 626.045V680.638ZM1403.4 682.762V739.863L1438.88 778.406V715.432L1403.4 682.762ZM1438.88 714.135L1403.4 681.464V626.69L1438.88 652.173V714.135ZM1229.72 527.969V566.244H1181.65V527.969H1229.72ZM1180.75 527.969V566.244H1132.68V527.969H1180.75ZM1131.78 527.969V566.244H1084.68V527.969H1131.78ZM1083.79 527.969V566.244H1036.71V527.969H1083.79ZM1035.81 527.969V566.244H987.739V527.969H1035.81ZM986.842 527.969V566.244H939.753V527.969H986.842ZM938.855 527.969V566.244H890.778V527.969H938.855ZM889.88 527.969V566.244H842.802V527.969H889.88ZM841.905 527.969V566.244H793.825V527.969H841.905ZM792.927 527.969V566.244H743.88V527.969H792.927ZM742.982 527.969V566.244H694.916V527.969H742.982ZM694.019 527.969V566.244H644.973V527.969H694.019ZM644.076 527.969V566.244H596.007V527.969H644.076ZM595.11 527.969V566.244H548.02V527.969H595.11ZM547.122 527.969V566.244H499.056V527.969H547.122ZM498.158 527.969V566.244H451.057V527.969H498.158ZM450.16 527.969V566.244H402.102V527.969H450.16ZM401.205 527.969V566.244H354.104V527.969H401.205ZM353.206 527.969V566.244H306.118V527.969H353.206ZM305.221 527.969V566.244H257.159V527.969H305.221ZM256.262 527.969V566.244H208.191V527.969H256.262ZM207.294 527.969V566.244H160.198V527.969H207.294ZM159.301 527.969V566.244H115.639V527.969H159.301ZM114.742 528.249V566.482L94.0988 581.814V538.666L114.742 528.249ZM93.2015 539.119V582.48L67.6585 601.451V552.01L93.2015 539.119ZM66.7612 552.463V602.118L36.7888 624.378V567.588L66.7612 552.463ZM35.8915 568.041V625.045L0.897314 651.035V585.701L35.8915 568.041ZM1344.71 583.351L1370.25 601.694V552.168L1344.71 539.704V583.351ZM1371.15 602.339L1402.5 624.856V567.906L1371.15 552.606V602.339ZM1403.4 625.5L1438.88 650.983V585.659L1403.4 568.344V625.5ZM1322.17 567.168L1343.81 582.706V539.266L1322.17 528.708V567.168ZM1277.7 526.969V488.692H1230.62V526.969H1277.7ZM1229.72 526.969V488.692H1181.65V526.969H1229.72ZM1180.75 526.969V488.692H1132.68V526.969H1180.75ZM1131.78 526.969V488.692H1084.68V526.969H1131.78ZM1083.79 526.969V488.692H1036.71V526.969H1083.79ZM1035.81 526.969V488.692H987.739V526.969H1035.81ZM986.842 526.969V488.692H939.753V526.969H986.842ZM938.855 526.969V488.692H890.778V526.969H938.855ZM889.88 526.969V488.692H842.802V526.969H889.88ZM841.905 526.969V488.692H793.825V526.969H841.905ZM792.927 526.969V488.692H743.88V526.969H792.927ZM742.982 526.969V488.692H694.916V526.969H742.982ZM694.019 526.969V488.692H644.973V526.969H694.019ZM644.076 526.969V488.692H596.007V526.969H644.076ZM595.11 526.969V488.692H548.02V526.969H595.11ZM547.122 526.969V488.692H499.056V526.969H547.122ZM498.158 526.969V488.692H451.057V526.969H498.158ZM450.16 526.969V488.692H402.102V526.969H450.16ZM401.205 526.969V488.692H354.104V526.969H401.205ZM353.206 526.969V488.692H306.118V526.969H353.206ZM305.221 526.969V488.692H257.159V526.969H305.221ZM256.262 526.969V488.692H208.191V526.969H256.262ZM207.294 526.969V488.692H160.198V526.969H207.294ZM159.301 526.969V488.692H115.639V526.969H159.301ZM114.742 527.151V488.871L94.0988 495.947V537.569L114.742 527.151ZM93.2015 538.021V496.255L67.6585 505.011V550.912L93.2015 538.021ZM66.7612 551.365V505.318L36.7888 515.592V566.491L66.7612 551.365ZM35.8915 566.944V515.9L0.897314 527.896V584.604L35.8915 566.944ZM1343.81 538.174L1322.17 527.616V489.184L1343.81 496.355V538.174ZM1370.25 551.076L1344.71 538.612V496.653L1370.25 505.119V551.076ZM1402.5 566.814L1371.15 551.514V505.416L1402.5 515.809V566.814ZM1438.88 584.568L1403.4 567.252V516.106L1438.88 527.868V584.568ZM1277.7 449.413V487.692H1230.62V449.413H1277.7ZM1229.72 449.413V487.692H1181.65V449.413H1229.72ZM1180.75 449.413V487.692H1132.68V449.413H1180.75ZM1131.78 449.413V487.692H1084.68V449.413H1131.78ZM1083.79 449.413V487.692H1036.71V449.413H1083.79ZM1035.81 449.413V487.692H987.739V449.413H1035.81ZM986.842 449.413V487.692H939.753V449.413H986.842ZM938.855 449.413V487.692H890.778V449.413H938.855ZM889.88 449.413V487.692H842.802V449.413H889.88ZM841.905 449.413V487.692H793.825V449.413H841.905ZM792.927 449.413V487.692H743.88V449.413H792.927ZM742.982 449.413V487.692H694.916V449.413H742.982ZM694.019 449.413V487.692H644.973V449.413H694.019ZM644.076 449.413V487.692H596.007V449.413H644.076ZM595.11 449.413V487.692H548.02V449.413H595.11ZM547.122 449.413V487.692H499.056V449.413H547.122ZM498.158 449.413V487.692H451.057V449.413H498.158ZM450.16 449.413V487.692H402.102V449.413H450.16ZM401.205 449.413V487.692H354.104V449.413H401.205ZM353.206 449.413V487.692H306.118V449.413H353.206ZM305.221 449.413V487.692H257.159V449.413H305.221ZM256.262 449.413V487.692H208.191V449.413H256.262ZM207.294 449.413V487.692H160.198V449.413H207.294ZM159.301 449.413V487.692H115.639V449.413H159.301ZM114.742 449.477V487.825L94.0988 494.901V452.229L114.742 449.477ZM93.2015 452.349V495.209L67.6585 503.965V455.754L93.2015 452.349ZM66.7612 455.873V504.272L36.7888 514.546V459.869L66.7612 455.873ZM35.8915 459.988V514.854L0.897314 526.849V464.653L35.8915 459.988ZM1371.15 504.373L1402.5 514.765V459.953L1371.15 455.912V504.373ZM1403.4 515.063L1438.88 526.824V464.643L1403.4 460.069V515.063ZM1344.71 495.609L1370.25 504.076V455.796L1344.71 452.504V495.609ZM1321.28 448.477V409.052L1320.75 409.047H1278.6V448.413H1320.78L1321.28 448.477ZM1277.7 448.413V409.047H1230.62V448.413H1277.7ZM1229.72 448.413V409.047H1181.65V448.413H1229.72ZM1180.75 448.413V409.047H1132.68V448.413H1180.75ZM1131.78 448.413V409.047H1084.68V448.413H1131.78ZM1083.79 448.413V409.047H1036.71V448.413H1083.79ZM1035.81 448.413V409.047H987.739V448.413H1035.81ZM986.842 448.413V409.047H939.753V448.413H986.842ZM938.855 448.413V409.047H890.778V448.413H938.855ZM889.88 448.413V409.047H842.802V448.413H889.88ZM841.905 448.413V409.047H793.825V448.413H841.905ZM792.927 448.413V409.047H743.88V448.413H792.927ZM742.982 448.413V409.047H694.916V448.413H742.982ZM694.019 448.413V409.047H644.973V448.413H694.019ZM644.076 448.413V409.047H596.007V448.413H644.076ZM595.11 448.413V409.047H548.02V448.413H595.11ZM547.122 448.413V409.047H499.056V448.413H547.122ZM498.158 448.413V409.047H451.057V448.413H498.158ZM450.16 448.413V409.047H402.102V448.413H450.16ZM401.205 448.413V409.047H354.104V448.413H401.205ZM353.206 448.413V409.047H306.118V448.413H353.206ZM305.221 448.413V409.047H257.159V448.413H305.221ZM256.262 448.413V409.047H208.191V448.413H256.262ZM207.294 448.413V409.047H160.198V448.413H207.294ZM159.301 448.413V409.047H115.639V448.413H159.301ZM114.742 448.47V409.051L94.0988 409.248V451.222L114.742 448.47ZM93.2015 451.342V409.256L67.6585 409.5V454.747L93.2015 451.342ZM66.7612 454.866V409.508L36.7888 409.794V458.862L66.7612 454.866ZM35.8915 458.981V409.802L0.897314 410.135V463.646L35.8915 458.981ZM1370.25 454.789L1344.71 451.497V409.267L1370.25 409.503V454.789ZM1402.5 458.947L1371.15 454.905V409.511L1402.5 409.8V458.947ZM1438.88 463.636L1403.4 459.062V409.808L1438.88 410.135V463.636ZM1321.28 370.822V408.052L1320.76 408.047H1320.75H1278.6V370.859H1320.77L1321.28 370.822ZM1277.7 370.859V408.047H1230.62V370.859H1277.7ZM1229.72 370.859V408.047H1181.65V370.859H1229.72ZM1180.75 370.859V408.047H1132.68V370.859H1180.75ZM1131.78 370.859V408.047H1084.68V370.859H1131.78ZM1083.79 370.859V408.047H1036.71V370.859H1083.79ZM1035.81 370.859V408.047H987.739V370.859H1035.81ZM986.842 370.859V408.047H939.753V370.859H986.842ZM938.855 370.859V408.047H890.778V370.859H938.855ZM889.88 370.859V408.047H842.802V370.859H889.88ZM841.905 370.859V408.047H793.825V370.859H841.905ZM792.927 370.859V408.047H743.88V370.859H792.927ZM742.982 370.859V408.047H694.916V370.859H742.982ZM694.019 370.859V408.047H644.973V370.859H694.019ZM644.076 370.859V408.047H596.007V370.859H644.076ZM595.11 370.859V408.047H548.02V370.859H595.11ZM547.122 370.859V408.047H499.056V370.859H547.122ZM498.158 370.859V408.047H451.057V370.859H498.158ZM450.16 370.859V408.047H402.102V370.859H450.16ZM401.205 370.859V408.047H354.104V370.859H401.205ZM353.206 370.859V408.047H306.118V370.859H353.206ZM305.221 370.859V408.047H257.159V370.859H305.221ZM256.262 370.859V408.047H208.191V370.859H256.262ZM207.294 370.859V408.047H160.198V370.859H207.294ZM159.301 370.859V408.047H115.639V370.859H159.301ZM114.742 370.825V408.051L94.0988 408.248V369.253L114.742 370.825ZM93.2015 369.184V408.256L67.6585 408.5V367.239L93.2015 369.184ZM66.7612 367.17V408.508L36.7888 408.794V364.887L66.7612 367.17ZM35.8915 364.819V408.802L0.897314 409.135V362.153L35.8915 364.819ZM1403.4 408.808L1438.88 409.135V362.159L1403.4 364.773V408.808ZM1371.15 408.511L1402.5 408.8V364.839L1371.15 367.148V408.511ZM1343.81 368.16V326.501L1322.17 331.282V369.754L1343.81 368.16ZM1321.28 369.82V331.48L1320.8 331.586H1278.6V369.859H1320.75L1321.28 369.82ZM1277.7 369.859V331.586H1230.62V369.859H1277.7ZM1229.72 369.859V331.586H1181.65V369.859H1229.72ZM1180.75 369.859V331.586H1132.68V369.859H1180.75ZM1131.78 369.859V331.586H1084.68V369.859H1131.78ZM1083.79 369.859V331.586H1036.71V369.859H1083.79ZM1035.81 369.859V331.586H987.739V369.859H1035.81ZM986.842 369.859V331.586H939.753V369.859H986.842ZM938.855 369.859V331.586H890.778V369.859H938.855ZM889.88 369.859V331.586H842.802V369.859H889.88ZM841.905 369.859V331.586H793.825V369.859H841.905ZM792.927 369.859V331.586H743.88V369.859H792.927ZM742.982 369.859V331.586H694.916V369.859H742.982ZM694.019 369.859V331.586H644.973V369.859H694.019ZM644.076 369.859V331.586H596.007V369.859H644.076ZM595.11 369.859V331.586H548.02V369.859H595.11ZM547.122 369.859V331.586H499.056V369.859H547.122ZM498.158 369.859V331.586H451.057V369.859H498.158ZM450.16 369.859V331.586H402.102V369.859H450.16ZM401.205 369.859V331.586H354.104V369.859H401.205ZM353.206 369.859V331.586H306.118V369.859H353.206ZM305.221 369.859V331.586H257.159V369.859H305.221ZM256.262 369.859V331.586H208.191V369.859H256.262ZM207.294 369.859V331.586H160.198V369.859H207.294ZM159.301 369.859V331.586H115.639V369.859H159.301ZM114.742 369.823V331.492L94.0988 326.774V368.25L114.742 369.823ZM93.2015 368.182V326.569L67.6585 320.732V366.236L93.2015 368.182ZM66.7612 366.168V320.527L36.7888 313.677V363.885L66.7612 366.168ZM35.8915 363.817V313.472L0.897314 305.475V361.151L35.8915 363.817ZM1402.5 363.837L1371.15 366.147V320.46L1402.5 313.532V363.837ZM1438.88 361.157L1403.4 363.771V313.333L1438.88 305.492V361.157ZM1343.81 282.997V325.481L1322.17 330.262V291.762L1343.81 282.997ZM1321.28 292.125V330.46L1320.71 330.586H1278.6V292.305H1320.83L1321.28 292.125ZM1277.7 292.305V330.586H1230.62V292.305H1277.7ZM1229.72 292.305V330.586H1181.65V292.305H1229.72ZM1180.75 292.305V330.586H1132.68V292.305H1180.75ZM1131.78 292.305V330.586H1084.68V292.305H1131.78ZM1083.79 292.305V330.586H1036.71V292.305H1083.79ZM1035.81 292.305V330.586H987.739V292.305H1035.81ZM986.842 292.305V330.586H939.753V292.305H986.842ZM938.855 292.305V330.586H890.778V292.305H938.855ZM889.88 292.305V330.586H842.802V292.305H889.88ZM841.905 292.305V330.586H793.825V292.305H841.905ZM792.927 292.305V330.586H743.88V292.305H792.927ZM742.982 292.305V330.586H694.916V292.305H742.982ZM694.019 292.305V330.586H644.973V292.305H694.019ZM644.076 292.305V330.586H596.007V292.305H644.076ZM595.11 292.305V330.586H548.02V292.305H595.11ZM547.122 292.305V330.586H499.056V292.305H547.122ZM498.158 292.305V330.586H451.057V292.305H498.158ZM450.16 292.305V330.586H402.102V292.305H450.16ZM401.205 292.305V330.586H354.104V292.305H401.205ZM353.206 292.305V330.586H306.118V292.305H353.206ZM305.221 292.305V330.586H257.159V292.305H305.221ZM256.262 292.305V330.586H208.191V292.305H256.262ZM207.294 292.305V330.586H160.198V292.305H207.294ZM159.301 292.305V330.586H115.639V292.305H159.301ZM114.742 292.148V330.471L94.0988 325.753V283.499L114.742 292.148ZM93.2015 283.123V325.548L67.6585 319.711V272.422L93.2015 283.123ZM66.7612 272.046V319.506L36.7888 312.657V259.488L66.7612 272.046ZM35.8915 259.112V312.452L0.897314 304.455V244.451L35.8915 259.112ZM1438.88 244.482V304.473L1403.4 312.314V258.857L1438.88 244.482ZM1370.25 271.222V227.561L1344.71 240.731V281.569L1370.25 271.222ZM1343.81 281.933V241.194L1322.17 252.349V290.698L1343.81 281.933ZM1321.28 291.061V252.812L1320.85 253.03H1278.6V291.305H1320.67L1321.28 291.061ZM1277.7 291.305V253.03H1230.62V291.305H1277.7ZM1229.72 291.305V253.03H1181.65V291.305H1229.72ZM1180.75 291.305V253.03H1132.68V291.305H1180.75ZM1131.78 291.305V253.03H1084.68V291.305H1131.78ZM1083.79 291.305V253.03H1036.71V291.305H1083.79ZM1035.81 291.305V253.03H987.739V291.305H1035.81ZM986.842 291.305V253.03H939.753V291.305H986.842ZM938.855 291.305V253.03H890.778V291.305H938.855ZM889.88 291.305V253.03H842.802V291.305H889.88ZM841.905 291.305V253.03H793.825V291.305H841.905ZM792.927 291.305V253.03H743.88V291.305H792.927ZM742.982 291.305V253.03H694.916V291.305H742.982ZM694.019 291.305V253.03H644.973V291.305H694.019ZM644.076 291.305V253.03H596.007V291.305H644.076ZM595.11 291.305V253.03H548.02V291.305H595.11ZM547.122 291.305V253.03H499.056V291.305H547.122ZM498.158 291.305V253.03H451.057V291.305H498.158ZM450.16 291.305V253.03H402.102V291.305H450.16ZM401.205 291.305V253.03H354.104V291.305H401.205ZM353.206 291.305V253.03H306.118V291.305H353.206ZM305.221 291.305V253.03H257.159V291.305H305.221ZM256.262 291.305V253.03H208.191V291.305H256.262ZM207.294 291.305V253.03H160.198V291.305H207.294ZM159.301 291.305V253.03H115.639V291.305H159.301ZM114.742 291.08V252.841L94.0988 241.833V282.431L114.742 291.08ZM93.2015 282.055V241.355L67.6585 227.735V271.353L93.2015 282.055ZM66.7612 270.977V227.256L36.7888 211.274V258.42L66.7612 270.977ZM35.8915 258.044V210.796L0.897314 192.136V243.383L35.8915 258.044ZM1438.88 243.417L1403.4 257.793V210.47L1438.88 192.174V243.417ZM1370.25 181.474V226.459L1344.71 239.629V198.172L1370.25 181.474ZM1343.81 198.758V240.092L1322.17 251.247V212.902L1343.81 198.758ZM1321.28 213.488V251.71L1320.66 252.03H1278.6V213.75H1320.88L1321.28 213.488ZM1277.7 213.75V252.03H1230.62V213.75H1277.7ZM1229.72 213.75V252.03H1181.65V213.75H1229.72ZM1180.75 213.75V252.03H1132.68V213.75H1180.75ZM1131.78 213.75V252.03H1084.68V213.75H1131.78ZM1083.79 213.75V252.03H1036.71V213.75H1083.79ZM1035.81 213.75V252.03H987.739V213.75H1035.81ZM986.842 213.75V252.03H939.753V213.75H986.842ZM938.855 213.75V252.03H890.778V213.75H938.855ZM889.88 213.75V252.03H842.802V213.75H889.88ZM841.905 213.75V252.03H793.825V213.75H841.905ZM792.927 213.75V252.03H743.88V213.75H792.927ZM742.982 213.75V252.03H694.916V213.75H742.982ZM694.019 213.75V252.03H644.973V213.75H694.019ZM644.076 213.75V252.03H596.007V213.75H644.076ZM595.11 213.75V252.03H548.02V213.75H595.11ZM547.122 213.75V252.03H499.056V213.75H547.122ZM498.158 213.75V252.03H451.057V213.75H498.158ZM450.16 213.75V252.03H402.102V213.75H450.16ZM401.205 213.75V252.03H354.104V213.75H401.205ZM353.206 213.75V252.03H306.118V213.75H353.206ZM305.221 213.75V252.03H257.159V213.75H305.221ZM256.262 213.75V252.03H208.191V213.75H256.262ZM207.294 213.75V252.03H160.198V213.75H207.294ZM159.301 213.75V252.03H115.639V213.75H159.301ZM114.742 213.526V251.732L94.0988 240.725V199.57L114.742 213.526ZM93.2015 198.964V240.246L67.6585 226.626V181.695L93.2015 198.964ZM66.7612 181.089V226.148L36.7888 210.166V160.826L66.7612 181.089ZM35.8915 160.219V209.687L0.897314 191.027V136.561L35.8915 160.219ZM1402.5 159.232V103.866L1371.15 128.836V179.728L1402.5 159.232ZM1370.25 180.315V129.551L1344.71 149.894V197.012L1370.25 180.315ZM1343.81 197.599V150.608L1322.17 167.84V211.742L1343.81 197.599ZM1321.28 212.329V168.468H1278.6V212.75H1320.63L1321.28 212.329ZM1277.7 212.75V168.468H1230.62V212.75H1277.7ZM1229.72 212.75V168.468H1181.65V212.75H1229.72ZM1180.75 212.75V168.468H1132.68V212.75H1180.75ZM1131.78 212.75V168.468H1084.68V212.75H1131.78ZM1083.79 212.75V168.468H1036.71V212.75H1083.79ZM1035.81 212.75V168.468H987.739V212.75H1035.81ZM986.842 212.75V168.468H939.753V212.75H986.842ZM938.855 212.75V168.468H890.778V212.75H938.855ZM889.88 212.75V168.468H842.802V212.75H889.88ZM841.905 212.75V168.468H793.825V212.75H841.905ZM792.927 212.75V168.468H743.88V212.75H792.927ZM742.982 212.75V168.468H694.916V212.75H742.982ZM694.019 212.75V168.468H644.973V212.75H694.019ZM644.076 212.75V168.468H596.007V212.75H644.076ZM595.11 212.75V168.468H548.02V212.75H595.11ZM547.122 212.75V168.468H499.056V212.75H547.122ZM498.158 212.75V168.468H451.057V212.75H498.158ZM450.16 212.75V168.468H402.102V212.75H450.16ZM401.205 212.75V168.468H354.104V212.75H401.205ZM353.206 212.75V168.468H306.118V212.75H353.206ZM305.221 212.75V168.468H257.159V212.75H305.221ZM256.262 212.75V168.468H208.191V212.75H256.262ZM207.294 212.75V168.468H160.198V212.75H207.294ZM159.301 212.75V168.468H115.639V212.75H159.301ZM114.742 212.357V167.813L94.0988 150.801V198.401L114.742 212.357ZM93.2015 197.794V150.061L67.6585 129.011V180.526L93.2015 197.794ZM66.7612 179.919V128.272L36.7888 103.571V159.656L66.7612 179.919ZM35.8915 159.05V102.832L0.897314 73.9928V135.392L35.8915 159.05ZM1402.5 41.6522V102.637L1371.15 127.607V75.709L1402.5 41.6522ZM1370.25 76.6837V128.322L1344.71 148.665V104.429L1370.25 76.6837ZM1343.81 105.403V149.379L1322.17 166.61V128.905L1343.81 105.403ZM1321.28 128.656V167.325L1321.1 167.468H1278.6V128.656H1321.28ZM1277.7 128.656V167.468H1230.62V128.656H1277.7ZM1229.72 128.656V167.468H1181.65V128.656H1229.72ZM1180.75 128.656V167.468H1132.68V128.656H1180.75ZM1131.78 128.656V167.468H1084.68V128.656H1131.78ZM1083.79 128.656V167.468H1036.71V128.656H1083.79ZM1035.81 128.656V167.468H987.739V128.656H1035.81ZM986.842 128.656V167.468H939.753V128.656H986.842ZM938.855 128.656V167.468H890.778V128.656H938.855ZM889.88 128.656V167.468H842.802V128.656H889.88ZM841.905 128.656V167.468H793.825V128.656H841.905ZM792.927 128.656V167.468H743.88V128.656H792.927ZM742.982 128.656V167.468H694.916V128.656H742.982ZM694.019 128.656V167.468H644.973V128.656H694.019ZM644.076 128.656V167.468H596.007V128.656H644.076ZM595.11 128.656V167.468H548.02V128.656H595.11ZM547.122 128.656V167.468H499.056V128.656H547.122ZM498.158 128.656V167.468H451.057V128.656H498.158ZM450.16 128.656V167.468H402.102V128.656H450.16ZM401.205 128.656V167.468H354.104V128.656H401.205ZM353.206 128.656V167.468H306.118V128.656H353.206ZM305.221 128.656V167.468H257.159V128.656H305.221ZM256.262 128.656V167.468H208.191V128.656H256.262ZM207.294 128.656V167.468H160.198V128.656H207.294ZM159.301 128.893V167.468H115.833L115.639 167.309V128.776L115.856 129.017L116.178 128.656H159.097L159.301 128.893ZM114.742 127.783V166.569L94.0988 149.557V104.921L114.742 127.783ZM93.2015 103.927V148.818L67.6585 127.768V76.2812H68.2381L93.2015 103.927ZM66.7612 75.2812V127.028L36.7888 102.328V41.4521L67.3352 75.2812H66.7612ZM35.8915 40.4583V101.588L0.897314 72.7491V1.70336L35.8915 40.4583ZM1.57027 779L35.8915 740.751V741H80.9898L47.8157 779H1.57027ZM67.2477 705.807L36.7888 739.751V740H81.8628L111.714 705.807H67.2477ZM112.587 704.807H68.145L93.2015 676.883V677.434H136.483L112.587 704.807ZM94.0988 676.434V675.883L115.214 652.352H158.38L137.356 676.434H94.0988ZM36.7506 40L1.5352 1H49.7998L49.4761 1.34619L82.7591 40H36.7506ZM37.6536 41L68.6082 75.2812H113.138L83.6202 41H37.6536ZM69.5111 76.2812L94.2186 103.644H137.56L113.999 76.2812H69.5111ZM95.1216 104.644L115.901 127.656H158.236L138.421 104.644H95.1216ZM49.0677 779H104.713L135.194 741H82.2418L49.0677 779ZM105.917 779H159.55L188.289 741H136.398L105.917 779ZM160.723 779H220.242L245.498 741H189.462L160.723 779ZM221.359 779H273.117L296.921 741H246.615L221.359 779ZM274.211 779H331.869L352.479 741H298.015L274.211 779ZM332.917 779H390.598L408.306 741H353.528L332.917 779ZM391.609 779H444.459L460.425 741H409.317L391.609 779ZM445.45 779H501.239L514.883 741H461.416L445.45 779ZM502.206 779H559.971L570.422 741H515.849L502.206 779ZM560.91 779H618.702L626.25 741H571.36L560.91 779ZM619.621 779H685.238L687.851 741H627.169L619.621 779ZM686.138 779H751.761L749.148 741H688.751L686.138 779ZM752.661 779H818.279L810.732 741H750.048L752.661 779ZM819.198 779H877.003L866.552 741H811.651L819.198 779ZM877.941 779H935.694L922.05 741H867.491L877.941 779ZM936.661 779H992.461L976.495 741H923.017L936.661 779ZM993.452 779H1046.29L1028.58 741H977.486L993.452 779ZM1047.3 779H1104.99L1084.38 741H1029.59L1047.3 779ZM1106.04 779H1163.68L1139.87 741H1085.43L1106.04 779ZM1164.77 779H1216.54L1191.28 741H1140.97L1164.77 779ZM1217.66 779H1277.19L1248.45 741H1192.4L1217.66 779ZM1278.36 779H1332.07L1301.59 741H1249.62L1278.36 779ZM1333.27 779H1390.28L1356.75 741H1302.79L1333.27 779ZM1438.14 779L1403.16 741H1358.01L1391.53 779H1438.14ZM1370.76 705.807L1402.24 740H1357.12L1326.95 705.807H1370.76ZM1369.84 704.807H1326.07L1301.92 677.434H1344.64L1369.84 704.807ZM1321.55 652.352H1279.79L1301.04 676.434H1343.72L1321.55 652.352ZM1402.74 40H1357.18L1391.92 1H1438.64L1402.74 40ZM1401.82 41L1370.26 75.2812H1325.75L1356.29 41H1401.82ZM1369.33 76.2812H1324.86L1300.48 103.644H1344.14L1369.33 76.2812ZM1343.22 104.644H1299.59L1279.09 127.656H1322.04L1343.22 104.644ZM1390.66 1H1333.61L1302.03 40H1355.91L1390.66 1ZM1332.4 1H1276.19L1247.2 40H1300.82L1332.4 1ZM1275.03 1H1217.88L1191.75 40H1246.03L1275.03 1ZM1216.76 1H1163.6L1139.4 40H1190.63L1216.76 1ZM1162.51 1H1107.28L1107.67 1.26454L1086 40H1138.31L1162.51 1ZM1106.76 1H1047.61L1048.01 1.23395L1029.6 40H1084.94L1106.76 1ZM1047.11 1H993.61L977.086 40H1028.58L1047.11 1ZM992.618 1H936.649L922.573 40H976.093L992.618 1ZM935.682 1H877.903L867.131 40H921.606L935.682 1ZM876.964 1H819.158L811.382 40H866.192L876.964 1ZM818.239 1H752.365L749.759 40H810.462L818.239 1ZM751.465 1H685.585L688.451 40H748.86L751.465 1ZM684.685 1H618.812L626.849 40H687.551L684.685 1ZM617.891 1H560.533L571.433 40H625.928L617.891 1ZM559.593 1H501.369L515.706 40H570.493L559.593 1ZM500.399 1H444.433L461.222 40H514.736L500.399 1ZM443.438 1H390.628L409.203 40H460.227L443.438 1ZM389.612 1H332.358L353.799 40H408.187L389.612 1ZM331.305 1H274.541L299.004 40H352.747L331.305 1ZM273.446 1H220.292L246.683 40H297.909L273.446 1ZM219.169 1H161.205L190.714 40H245.559L219.169 1ZM160.618 1H106.436L137.731 40H189.54L160.275 1.32237L160.618 1ZM105.233 1H50.4216L84.0027 40H136.527L105.233 1ZM1298.32 104.644L1277.82 127.656H1231.05L1249.68 104.644H1298.32ZM1182.04 127.656H1229.84L1248.48 104.644H1199.15L1182.04 127.656ZM1180.87 127.656H1133.02L1148.44 104.644H1197.98L1180.87 127.656ZM1084.99 127.656H1131.9L1147.32 104.644H1099.28L1084.99 127.656ZM1083.9 127.656H1036.98L1049.85 104.644H1098.18L1083.9 127.656ZM987.961 127.656H1035.92L1048.79 104.644H998.892L987.961 127.656ZM986.946 127.656H939.946L949.696 104.644H997.877L986.946 127.656ZM890.937 127.656H938.953L948.704 104.644H899.242L890.937 127.656ZM889.969 127.656H842.918L849.275 104.644H898.275L889.969 127.656ZM793.904 127.656H841.979L848.336 104.644H798.492L793.904 127.656ZM792.985 127.656H743.904L745.441 104.644H797.573L792.985 127.656ZM694.893 127.656H743.004L744.541 104.644H693.201L694.893 127.656ZM797.773 103.644H745.508L747.336 76.2812H803.228L797.773 103.644ZM744.608 103.644L746.436 76.2812H691.117L693.128 103.644H744.608ZM803.428 75.2812H747.403L749.693 41H810.263L803.428 75.2812ZM746.503 75.2812L748.793 41H688.525L691.044 75.2812H746.503ZM810.533 740H749.979L747.628 705.807H803.742L810.533 740ZM803.543 704.807H747.56L745.678 677.434H798.106L803.543 704.807ZM746.66 704.807L744.778 677.434H693.121L691.239 704.807H746.66ZM797.908 676.434H745.609L743.953 652.352H793.124L797.908 676.434ZM744.709 676.434L743.053 652.352H694.846L693.19 676.434H744.709ZM749.079 740L746.728 705.807H691.17L688.819 740H749.079ZM798.692 103.644H848.612L856.17 76.2812H804.148L798.692 103.644ZM804.347 75.2812H856.446L865.916 41H811.182L804.347 75.2812ZM811.452 740H866.277L856.873 705.807H804.661L811.452 740ZM804.462 704.807H856.598L849.071 677.434H799.025L804.462 704.807ZM798.827 676.434H848.796L842.172 652.352H794.043L798.827 676.434ZM898.636 103.644H849.551L857.109 76.2812H908.512L898.636 103.644ZM908.872 75.2812H857.385L866.854 41H921.245L908.872 75.2812ZM921.691 740H867.216L857.812 705.807H909.414L921.691 740ZM909.055 704.807H857.537L850.009 677.434H899.227L909.055 704.807ZM898.868 676.434H849.734L843.111 652.352H890.221L898.868 676.434ZM899.603 103.644H949.127L960.721 76.2812H909.479L899.603 103.644ZM909.84 75.2812H961.145L975.67 41H922.212L909.84 75.2812ZM922.658 740H976.075L961.708 705.807H910.381L922.658 740ZM910.022 704.807H961.288L949.787 677.434H900.194L910.022 704.807ZM899.835 676.434H949.367L939.248 652.352H891.188L899.835 676.434ZM998.352 103.644H950.12L961.713 76.2812H1011.35L998.352 103.644ZM1011.82 75.2812H962.137L976.662 41H1028.11L1011.82 75.2812ZM1028.12 740H977.065L962.699 705.807H1012.18L1028.12 740ZM1011.72 704.807H962.279L950.778 677.434H998.961L1011.72 704.807ZM998.495 676.434H950.358L940.239 652.352H987.273L998.495 676.434ZM999.367 103.644H1049.35L1064.65 76.2812H1012.36L999.367 103.644ZM1012.84 75.2812H1065.21L1084.39 41H1029.12L1012.84 75.2812ZM1029.13 740H1083.84L1065.29 705.807H1013.19L1029.13 740ZM1012.73 704.807H1064.75L1049.91 677.434H999.972L1012.73 704.807ZM999.506 676.434H1049.36L1036.3 652.352H988.284L999.506 676.434ZM1098.81 103.644H1050.41L1065.71 76.2812H1115.79L1098.81 103.644ZM1116.41 75.2812H1066.27L1085.44 41H1137.68L1116.41 75.2812ZM1139.25 740H1084.89L1066.34 705.807H1117.83L1139.25 740ZM1117.2 704.807H1065.8L1050.95 677.434H1100.05L1117.2 704.807ZM1099.43 676.434H1050.41L1037.35 652.352H1084.34L1099.43 676.434ZM1099.9 103.644H1147.99L1166.32 76.2812H1116.88L1099.9 103.644ZM1117.5 75.2812H1166.99L1189.96 41H1138.78L1117.5 75.2812ZM1140.34 740H1190.62L1167.89 705.807H1118.92L1140.34 740ZM1118.3 704.807H1167.23L1149.04 677.434H1101.15L1118.3 704.807ZM1100.52 676.434H1148.37L1132.37 652.352H1085.44L1100.52 676.434ZM1198.72 103.644H1149.11L1167.44 76.2812H1219.06L1198.72 103.644ZM1219.81 75.2812H1168.11L1191.08 41H1245.29L1219.81 75.2812ZM1247.69 740H1191.74L1169.01 705.807H1221.83L1247.69 740ZM1221.08 704.807H1168.35L1150.15 677.434H1200.38L1221.08 704.807ZM1199.62 676.434H1149.49L1133.48 652.352H1181.41L1199.62 676.434ZM1199.89 103.644H1249.29L1271.44 76.2812H1220.23L1199.89 103.644ZM1220.97 75.2812H1272.25L1300.01 41H1246.46L1220.97 75.2812ZM1248.87 740H1300.79L1273.36 705.807H1223.01L1248.87 740ZM1222.25 704.807H1272.56L1250.6 677.434H1201.55L1222.25 704.807ZM1200.79 676.434H1249.8L1230.48 652.352H1182.58L1200.79 676.434ZM1299.22 103.644H1250.49L1272.65 76.2812H1323.59L1299.22 103.644ZM1301.22 41L1273.46 75.2812H1324.48L1355.02 41H1301.22ZM1355.86 740H1301.99L1274.56 705.807H1325.69L1355.86 740ZM1324.81 704.807H1273.76L1251.81 677.434H1300.66L1324.81 704.807ZM1299.78 676.434H1251L1231.69 652.352H1278.53L1299.78 676.434ZM159.632 652.352H206.301L186.984 676.434H138.608L159.632 652.352ZM207.505 652.352L188.187 676.434H237.119L255.332 652.352H207.505ZM256.506 652.352L238.292 676.434H288.41L304.415 652.352H256.506ZM237.536 677.434H287.745L269.553 704.807H216.835L237.536 677.434ZM288.862 677.434L270.669 704.807H319.593L336.74 677.434H288.862ZM337.834 677.434L320.687 704.807H372.11L386.957 677.434H337.834ZM320.061 705.807H371.568L353.022 740H298.641L320.061 705.807ZM372.616 705.807L354.07 740H408.772L424.706 705.807H372.616ZM425.717 705.807L409.783 740H460.845L475.212 705.807H425.717ZM627.055 41H687.624L690.143 75.2812H634.12L627.055 41ZM634.326 76.2812H690.217L692.228 103.644H639.965L634.326 76.2812ZM640.171 104.644H692.301L693.992 127.656H644.914L640.171 104.644ZM644.776 652.352H693.946L692.29 676.434H639.993L644.776 652.352ZM639.794 677.434H692.221L690.339 704.807H634.357L639.794 677.434ZM634.159 705.807H690.27L687.92 740H627.367L634.159 705.807ZM633.24 705.807L626.448 740H571.635L581.039 705.807H633.24ZM638.875 677.434L633.438 704.807H581.314L588.842 677.434H638.875ZM643.857 652.352L639.074 676.434H589.117L595.74 652.352H643.857ZM643.993 127.656L639.251 104.644H589.501L595.932 127.656H643.993ZM639.045 103.644L633.406 76.2812H581.573L589.221 103.644H639.045ZM633.199 75.2812L626.134 41H571.712L581.294 75.2812H633.199ZM516.073 41H570.773L580.354 75.2812H528.676L516.073 41ZM529.043 76.2812H580.633L588.281 103.644H539.102L529.043 76.2812ZM539.47 104.644H588.561L594.992 127.656H547.929L539.47 104.644ZM547.678 652.352H594.801L588.178 676.434H539.032L547.678 652.352ZM538.672 677.434H587.903L580.376 704.807H528.845L538.672 677.434ZM528.486 705.807H580.101L570.697 740H516.209L528.486 705.807ZM527.519 705.807L515.242 740H461.836L476.203 705.807H527.519ZM537.706 677.434L527.878 704.807H476.623L488.124 677.434H537.706ZM546.712 652.352L538.065 676.434H488.544L498.663 652.352H546.712ZM546.96 127.656L538.5 104.644H489.05L498.957 127.656H546.96ZM538.132 103.644L528.074 76.2812H476.841L488.62 103.644H538.132ZM527.706 75.2812L515.104 41H461.653L476.41 75.2812H527.706ZM409.679 41H460.658L475.415 75.2812H426.007L409.679 41ZM426.484 76.2812H475.846L487.625 103.644H439.516L426.484 76.2812ZM439.993 104.644H488.055L497.962 127.656H450.953L439.993 104.644ZM450.627 652.352H497.672L487.553 676.434H439.404L450.627 652.352ZM438.938 677.434H487.133L475.632 704.807H426.183L438.938 677.434ZM424.991 75.2812L408.664 41H354.349L373.196 75.2812H424.991ZM425.468 76.2812L438.5 103.644H388.789L373.746 76.2812H425.468ZM438.977 104.644H389.339L401.991 127.656H449.937L438.977 104.644ZM449.616 652.352H401.61L388.548 676.434H438.393L449.616 652.352ZM437.927 677.434H388.005L373.159 704.807H425.172L437.927 677.434ZM299.631 41H353.296L372.144 75.2812H321.134L299.631 41ZM321.761 76.2812H372.693L387.737 103.644H338.925L321.761 76.2812ZM339.552 104.644H388.287L400.938 127.656H353.987L339.552 104.644ZM353.547 652.352H400.561L387.499 676.434H338.461L353.547 652.352ZM337.83 103.644L320.667 76.2812H271.234L289.75 103.644H337.83ZM320.039 75.2812H270.557L247.36 41H298.536L320.039 75.2812ZM297.547 740L318.967 705.807H270.005L247.279 740H297.547ZM338.457 104.644L352.892 127.656H305.999L290.427 104.644H338.457ZM352.452 652.352H305.532L289.526 676.434H337.366L352.452 652.352ZM216.078 705.807H268.888L246.163 740H190.218L216.078 705.807ZM191.47 41H246.236L269.434 75.2812H217.409L191.47 41ZM218.165 76.2812H270.11L288.626 103.644H238.869L218.165 76.2812ZM239.626 104.644H289.303L304.875 127.656H257.037L239.626 104.644ZM255.864 127.656L238.452 104.644H189.603L208.068 127.656H255.864ZM237.695 103.644H188.8L166.844 76.2812H216.992L237.695 103.644ZM190.297 41H138.533L166.041 75.2812H216.235L190.297 41ZM189.045 740L214.905 705.807H164.627L137.2 740H189.045ZM215.661 704.807L236.363 677.434H187.385L165.429 704.807H215.661ZM137.735 677.434H186.182L164.226 704.807H113.839L137.735 677.434ZM112.966 705.807H163.423L135.996 740H83.1148L112.966 705.807ZM84.8638 41H137.33L164.838 75.2812H114.382L84.8638 41ZM115.243 76.2812H165.64L187.597 103.644H138.804L115.243 76.2812ZM139.665 104.644H188.399L206.865 127.656H159.48L139.665 104.644Z" fill="url(#paint0_radial_489:354)"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_489:354" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(705 238.5) rotate(168.807) scale(718.669 444.207)">
        <stop offset="0.444288" stopColor="#00463A"/>
        <stop offset="1" stopColor="#00C6A2"/>
        </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BgShapeCenterSmall() {
  return (
    <div className="w-full top-0 absolute left-0 overflow-hidden max-h-screen hidden md:block xs:block">
      <img src={bgGridSmallImg} alt="" className="w-full h-auto" />
    </div>
  );
}
