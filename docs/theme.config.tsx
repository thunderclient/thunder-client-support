import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

// <link rel="stylesheet" href="/global.css" /> 
// <div style={{fontWeight: "300", color: "var(--tc-logo-color)"}} className='nx-p-2'>Docs</div>

const config: DocsThemeConfig = {

  head:(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Documentation - Thunder Client" />
      <meta property="og:description" content="Thunder Client API Client Documentation" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  logo: (
        <div style={{display: "flex", alignItems: "center" }}>
          <svg style={{color: "#8758AF"}} className="tc-logo" width="28px" height="28px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="thunder-file-light" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Group" transform="translate(13.000000, 13.000000)">
                <circle id="Oval" stroke="currentColor" strokeWidth="22.6518519" cx="114.769087" cy="114.769087" r="114.769087"></circle>
                <g id="flash-(4)" transform="translate(59.562082, 31.702398)" fill="currentColor"   fillRule="nonzero"><path d="M8.63109806,96.3881003 L39.1299462,96.3881003 L32.832697,155.742515 C32.8050775,155.921522 32.7981726,156.451656 32.7981726,156.630663 C32.7981726,161.374334 36.6718094,165.236743 41.4292707,165.236743 C44.135983,165.236743 46.7184076,163.942389 48.4308174,161.649729 L108.751836,75.7335074 C109.863521,74.2532615 110.478055,72.4218876 110.478055,70.5698591 C110.478055,65.8261876 106.604418,61.9637788 101.846957,61.9637788 L64.5191842,61.9637788 L70.7335748,9.61815544 C70.7542894,9.41849437 70.7680992,8.80574145 70.7680992,8.60608038 C70.7750041,3.86240888 66.9013673,0 62.143906,0 C59.4371937,0 56.8547691,1.29435449 55.0871202,3.65586295 L1.72621961,82.6183717 C0.614534182,84.0986175 0,85.9299914 0,87.7820199 C0,92.5256914 3.87363681,96.3881003 8.63109806,96.3881003 L8.63109806,96.3881003 Z" id="Path"></path></g></g></g>
          </svg>

          <svg style={{color: "var(--tc-logo-color)", marginLeft: "5px"}} className="tc-brand-name" height="16px" viewBox="0 0 823 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <g id="tc-sf-pro-display-symbol" stroke="none" strokeWidth="1" fill="none"   fillRule="evenodd">
                                      <path d="M46.7822266,95 L46.7822266,17.2412109 L74.140625,17.2412109 L74.140625,3.40332031 L3.046875,3.40332031 L3.046875,17.2412109 L30.46875,17.2412109 L30.46875,95 L46.7822266,95 Z M97.9755859,95 L97.9755859,56.3427734 C97.9755859,46.4404297 103.751953,39.8388672 113.273438,39.8388672 C122.414062,39.8388672 127.111328,45.4882812 127.111328,54.8828125 L127.111328,95 L142.916992,95 L142.916992,51.6455078 C142.916992,36.2207031 134.220703,26.4453125 119.367188,26.4453125 C109.147461,26.4453125 101.720703,31.0791016 98.1025391,39.2675781 L97.7851562,39.2675781 L97.7851562,3.40332031 L82.1699219,3.40332031 L82.1699219,95 L97.9755859,95 Z M177.098633,96.2060547 C187.318359,96.2060547 194.110352,91.5087891 197.665039,83.3203125 L197.982422,83.3203125 L197.982422,95 L213.216797,95 L213.216797,27.7148438 L197.411133,27.7148438 L197.411133,66.6259766 C197.411133,76.4013672 191.761719,82.8759766 182.621094,82.8759766 C173.734375,82.8759766 169.037109,77.6708984 169.037109,68.0224609 L169.037109,27.7148438 L153.231445,27.7148438 L153.231445,71.1962891 C153.231445,86.7480469 162.499023,96.2060547 177.098633,96.2060547 Z M239.908203,95 L239.908203,56.0253906 C239.908203,46.3769531 245.68457,39.8388672 254.761719,39.8388672 C263.775391,39.8388672 268.21875,45.1708984 268.21875,54.6923828 L268.21875,95 L284.024414,95 L284.024414,51.5185547 C284.024414,35.9667969 275.582031,26.4453125 260.728516,26.4453125 C250.381836,26.4453125 243.208984,31.2695312 239.59082,39.2675781 L239.273438,39.2675781 L239.273438,27.7148438 L224.102539,27.7148438 L224.102539,95 L239.908203,95 Z M319.792969,96.0791016 C329.631836,96.0791016 337.375977,91.0644531 341.057617,83.5107422 L341.311523,83.5107422 L341.311523,95 L356.799805,95 L356.799805,3.40332031 L340.994141,3.40332031 L340.994141,39.0136719 L340.613281,39.0136719 C337.058594,31.5869141 329.441406,26.5722656 319.792969,26.5722656 C302.844727,26.5722656 291.863281,40.0292969 291.863281,61.2939453 C291.863281,82.6855469 302.844727,96.0791016 319.792969,96.0791016 Z M324.553711,83.1298828 C314.333984,83.1298828 308.049805,74.7509766 308.049805,61.3574219 C308.049805,48.0273438 314.397461,39.5849609 324.553711,39.5849609 C334.519531,39.5849609 341.057617,48.1542969 341.057617,61.3574219 C341.057617,74.6875 334.519531,83.1298828 324.553711,83.1298828 Z M397.646484,96.3330078 C413.579102,96.3330078 425.385742,87.5732422 427.416992,74.8779297 L412.626953,74.8779297 C410.913086,80.4638672 405.327148,84.1455078 397.963867,84.1455078 C387.617188,84.1455078 381.015625,76.9091797 381.015625,66.1181641 L381.015625,65.1660156 L428.051758,65.1660156 L428.051758,60.0244141 C428.051758,39.5849609 416.118164,26.3183594 397.011719,26.3183594 C377.587891,26.3183594 365.273438,40.3466797 365.273438,61.6113281 C365.273438,83.0664062 377.460938,96.3330078 397.646484,96.3330078 Z M412.563477,54.7558594 L381.142578,54.7558594 C381.777344,45.3613281 388.188477,38.5693359 397.075195,38.5693359 C406.152344,38.5693359 412.246094,45.234375 412.563477,54.7558594 Z M452.013672,95 L452.013672,55.8349609 C452.013672,46.3769531 457.40918,40.6005859 466.359375,40.6005859 C469.025391,40.6005859 471.4375,40.9814453 472.770508,41.4892578 L472.770508,27.2070312 C471.62793,26.953125 469.850586,26.5722656 467.819336,26.5722656 C459.884766,26.5722656 453.981445,31.2695312 451.696289,39.4580078 L451.378906,39.4580078 L451.378906,27.7148438 L436.208008,27.7148438 L436.208008,95 L452.013672,95 Z M543.990234,96.5234375 C565.635742,96.5234375 580.616211,84.6533203 583.472656,65.0390625 L567.413086,65.0390625 C564.874023,76.0839844 556.177734,82.6220703 544.053711,82.6220703 C528.18457,82.6220703 518.155273,69.7363281 518.155273,49.1699219 C518.155273,28.7304688 528.248047,15.78125 543.990234,15.78125 C555.860352,15.78125 565.191406,23.3349609 567.349609,34.8242188 L583.472656,34.8242188 C581.441406,15.1464844 565.254883,1.87988281 543.990234,1.87988281 C517.964844,1.87988281 501.397461,19.9707031 501.397461,49.1699219 C501.397461,78.5595703 517.837891,96.5234375 543.990234,96.5234375 Z M608.513672,95 L608.513672,3.40332031 L592.708008,3.40332031 L592.708008,95 L608.513672,95 Z M628.222656,17.5585938 C633.046875,17.5585938 636.855469,13.6865234 636.855469,8.98925781 C636.855469,4.22851562 633.046875,0.419921875 628.222656,0.419921875 C623.398438,0.419921875 619.526367,4.22851562 619.526367,8.98925781 C619.526367,13.6865234 623.398438,17.5585938 628.222656,17.5585938 Z M636.157227,95 L636.157227,27.7148438 L620.351562,27.7148438 L620.351562,95 L636.157227,95 Z M677.003906,96.3330078 C692.936523,96.3330078 704.743164,87.5732422 706.774414,74.8779297 L691.984375,74.8779297 C690.270508,80.4638672 684.68457,84.1455078 677.321289,84.1455078 C666.974609,84.1455078 660.373047,76.9091797 660.373047,66.1181641 L660.373047,65.1660156 L707.40918,65.1660156 L707.40918,60.0244141 C707.40918,39.5849609 695.475586,26.3183594 676.369141,26.3183594 C656.945312,26.3183594 644.630859,40.3466797 644.630859,61.6113281 C644.630859,83.0664062 656.818359,96.3330078 677.003906,96.3330078 Z M691.920898,54.7558594 L660.5,54.7558594 C661.134766,45.3613281 667.545898,38.5693359 676.432617,38.5693359 C685.509766,38.5693359 691.603516,45.234375 691.920898,54.7558594 Z M731.371094,95 L731.371094,56.0253906 C731.371094,46.3769531 737.147461,39.8388672 746.224609,39.8388672 C755.238281,39.8388672 759.681641,45.1708984 759.681641,54.6923828 L759.681641,95 L775.487305,95 L775.487305,51.5185547 C775.487305,35.9667969 767.044922,26.4453125 752.191406,26.4453125 C741.844727,26.4453125 734.671875,31.2695312 731.053711,39.2675781 L730.736328,39.2675781 L730.736328,27.7148438 L715.56543,27.7148438 L715.56543,95 L731.371094,95 Z M810.748047,95.3173828 C814.112305,95.3173828 817.222656,95.0634766 818.936523,94.6826172 L818.936523,82.6220703 C817.920898,82.8125 815.889648,82.9394531 814.429688,82.9394531 C808.84375,82.9394531 806.304688,80.4003906 806.304688,74.8779297 L806.304688,39.9023438 L819,39.9023438 L819,27.7148438 L806.304688,27.7148438 L806.304688,11.9726562 L790.499023,11.9726562 L790.499023,27.7148438 L780.850586,27.7148438 L780.850586,39.9023438 L790.499023,39.9023438 L790.499023,77.0996094 C790.499023,90.1757812 796.211914,95.3173828 810.748047,95.3173828 Z" id="ThunderClient" fill="currentColor"   fillRule="nonzero"></path> </g>
          </svg>
          <div className='nav-docs-title'>Documentation</div>
        </div>
  ),
  project: {
    link: 'https://github.com/thunderclient/thunder-client-support',
  },
  chat: {
    link: 'https://discord.com/invite/yw6UsfwrkH',
  },
  docsRepositoryBase: 'https://github.com/thunderclient/thunder-client-support/blob/main/docs/',
  footer: {
    text: <span className='footer-text'>© 2024 Thunder Client Limited. Registered Company in Ireland</span>,
  },
  primaryHue: 212,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  // https://github.com/shuding/nextra/blob/8e86fc60deadf8d93114e313c770a0b611921e9b/examples/docs/src/theme.config.js#L21
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath == '/') {
      return {
        titleTemplate: 'Documentation - Thunder Client'
      }
    }

    if (asPath =='/cli') {
      return {
        titleTemplate: 'Thunder Client CLI Docs',
      }
    }

    if (asPath.includes('/cli')) {
      return {
        titleTemplate: '%s – Thunder Client CLI',
      }
    }

    return {
      titleTemplate: '%s – Thunder Client Docs',
    };
  }
}

export default config
