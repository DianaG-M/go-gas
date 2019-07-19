import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private places: any[] = [
          {
            "-place_id": "2039",
            "name": "ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.",
            "cre_id": "PL/658/EXP/ES/2015",
            "location": {
              "x": "-116.9214",
              "y": "32.47641"
            }
          },
          {
            "-place_id": "2040",
            "name": "DIGEPE, S.A. DE C.V. (07356)",
            "cre_id": "PL/902/EXP/ES/2015",
            "location": {
              "x": "-99.74484",
              "y": "20.3037"
            }
          },
          {
            "-place_id": "2041",
            "name": "DIAZ GAS, S.A. DE C.V.",
            "cre_id": "PL/760/EXP/ES/2015",
            "location": {
              "x": "-106.4514",
              "y": "31.71947"
            }
          },
          {
            "-place_id": "2042",
            "name": "COMBU-EXPRESS, S.A. DE C.V.",
            "cre_id": "PL/825/EXP/ES/2015",
            "location": {
              "x": "-103.3042",
              "y": "20.71413"
            }
          },
          {
            "-place_id": "2043",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/585/EXP/ES/2015",
            "location": {
              "x": "-98.29977",
              "y": "26.03787"
            }
          },
          {
            "-place_id": "2044",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/842/EXP/ES/2015",
            "location": {
              "x": "-117.0715",
              "y": "32.51342"
            }
          },
          {
            "-place_id": "2045",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/371/EXP/ES/2015",
            "location": {
              "x": "-108.9685",
              "y": "25.7558"
            }
          },
          {
            "-place_id": "2046",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/439/EXP/ES/2015",
            "location": {
              "x": "-100.2918",
              "y": "25.77202"
            }
          },
          {
            "-place_id": "2047",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/860/EXP/ES/2015",
            "location": {
              "x": "-116.6079",
              "y": "31.86546"
            }
          },
          {
            "-place_id": "2048",
            "name": "INMOBILIARIA ESCOGAS SA DE CV",
            "cre_id": "PL/897/EXP/ES/2015",
            "location": {
              "x": "-117.0457",
              "y": "32.31202"
            }
          },
          {
            "-place_id": "2049",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/561/EXP/ES/2015",
            "location": {
              "x": "-100.184",
              "y": "25.65562"
            }
          },
          {
            "-place_id": "2050",
            "name": "AUTOSERVICIO BERLANGA S.A. DE C.V.",
            "cre_id": "PL/797/EXP/ES/2015",
            "location": {
              "x": "-101.4189",
              "y": "26.92554"
            }
          },
          {
            "-place_id": "2051",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/583/EXP/ES/2015",
            "location": {
              "x": "-97.44485",
              "y": "25.83842"
            }
          },
          {
            "-place_id": "2052",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/366/EXP/ES/2015",
            "location": {
              "x": "-105.1947",
              "y": "21.4739"
            }
          },
          {
            "-place_id": "2053",
            "name": "CIRCULO DOS, S.A. DE C.V.",
            "cre_id": "PL/635/EXP/ES/2015",
            "location": {
              "x": "-117.0271",
              "y": "32.5279"
            }
          },
          {
            "-place_id": "2054",
            "name": "Servicio Sevilla, S.A. de C.V.",
            "cre_id": "PL/868/EXP/ES/2015",
            "location": {
              "x": "-99.1973",
              "y": "19.58616"
            }
          },
          {
            "-place_id": "2055",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/558/EXP/ES/2015",
            "location": {
              "x": "-100.2365",
              "y": "25.6788"
            }
          },
          {
            "-place_id": "2056",
            "name": "GASOLINERA HUITEPEC, S.A. DE C.V.",
            "cre_id": "PL/887/EXP/ES/2015",
            "location": {
              "x": "-92.65437",
              "y": "16.73187"
            }
          },
          {
            "-place_id": "2057",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/454/EXP/ES/2015",
            "location": {
              "x": "-98.20425",
              "y": "26.0139"
            }
          },
          {
            "-place_id": "2058",
            "name": "SUPER SERVICIO MIVASA SA DE CV",
            "cre_id": "PL/890/EXP/ES/2015",
            "location": {
              "x": "-104.6217",
              "y": "24.02956"
            }
          },
          {
            "-place_id": "2059",
            "name": "SERVICIO SIERRA DE ARTEAGA SA DE CV",
            "cre_id": "PL/756/EXP/ES/2015",
            "location": {
              "x": "-100.9057",
              "y": "25.57358"
            }
          },
          {
            "-place_id": "2060",
            "name": "COMBUSTIBLES Y LUBRICANTES ATENAS SA DE CV",
            "cre_id": "PL/795/EXP/ES/2015",
            "location": {
              "x": "-106.1008",
              "y": "28.73367"
            }
          },
          {
            "-place_id": "2061",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/505/EXP/ES/2015",
            "location": {
              "x": "-103.9754",
              "y": "19.77838"
            }
          },
          {
            "-place_id": "2062",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/708/EXP/ES/2015",
            "location": {
              "x": "-117.0249",
              "y": "32.45102"
            }
          },
          {
            "-place_id": "2063",
            "name": "YLIGARZA S.A. DE C.V.",
            "cre_id": "PL/562/EXP/ES/2015",
            "location": {
              "x": "-100.2726",
              "y": "25.73174"
            }
          },
          {
            "-place_id": "2064",
            "name": "ESTACION LA VICTORIA, S.A. DE C.V.",
            "cre_id": "PL/636/EXP/ES/2015",
            "location": {
              "x": "-117.0466",
              "y": "32.53171"
            }
          },
          {
            "-place_id": "2065",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/516/EXP/ES/2015",
            "location": {
              "x": "-100.4652",
              "y": "25.68592"
            }
          },
          {
            "-place_id": "2066",
            "name": "ESTACION LA VICTORIA, S.A. DE C.V.",
            "cre_id": "PL/638/EXP/ES/2015",
            "location": {
              "x": "-117.0226",
              "y": "32.51045"
            }
          },
          {
            "-place_id": "2067",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/538/EXP/ES/2015",
            "location": {
              "x": "-100.1466",
              "y": "25.66026"
            }
          },
          {
            "-place_id": "2068",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/619/EXP/ES/2015",
            "location": {
              "x": "-100.9274",
              "y": "25.44151"
            }
          },
          {
            "-place_id": "2069",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/443/EXP/ES/2015",
            "location": {
              "x": "-98.32712",
              "y": "26.06297"
            }
          },
          {
            "-place_id": "2070",
            "name": "RAMCAL SA DE CV",
            "cre_id": "PL/689/EXP/ES/2015",
            "location": {
              "x": "-104.2109",
              "y": "19.03549"
            }
          },
          {
            "-place_id": "2071",
            "name": "Gasomac, S.A. de C.V.",
            "cre_id": "PL/650/EXP/ES/2015",
            "location": {
              "x": "-99.13844",
              "y": "19.3231"
            }
          },
          {
            "-place_id": "2072",
            "name": "Autoconsumo los Pinos, S.A. de C.V. ",
            "cre_id": "PL/866/EXP/ES/2015",
            "location": {
              "x": "-99.16505",
              "y": "19.30205"
            }
          },
          {
            "-place_id": "2073",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/380/EXP/ES/2015",
            "location": {
              "x": "-109.0001",
              "y": "25.77298"
            }
          },
          {
            "-place_id": "2074",
            "name": "servicios energeticos plaza industrial sa de cv ",
            "cre_id": "PL/764/EXP/ES/2015",
            "location": {
              "x": "-101.1169",
              "y": "25.2563"
            }
          },
          {
            "-place_id": "2075",
            "name": "SERVICIOS GASOLINEROS DE MEXICO, S.A. DE C.V.",
            "cre_id": "PL/851/EXP/ES/2015",
            "location": {
              "x": "-102.2834",
              "y": "22.12339"
            }
          },
          {
            "-place_id": "2076",
            "name": "OLEUM GAS S.A. DE C.V.",
            "cre_id": "PL/754/EXP/ES/2015",
            "location": {
              "x": "0",
              "y": "0"
            }
          },
          {
            "-place_id": "2077",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/397/EXP/ES/2015",
            "location": {
              "x": "-109.2961",
              "y": "25.96616"
            }
          },
          {
            "-place_id": "2078",
            "name": "Gasolinería Cid, S.A. de C.V.",
            "cre_id": "PL/823/EXP/ES/2015",
            "location": {
              "x": "-99.36308",
              "y": "19.64046"
            }
          },
          {
            "-place_id": "2079",
            "name": "Gasolinería Perseo, S.A. de C.V.",
            "cre_id": "PL/627/EXP/ES/2015",
            "location": {
              "x": "-99.11606",
              "y": "19.74912"
            }
          },
          {
            "-place_id": "2080",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/408/EXP/ES/2015",
            "location": {
              "x": "-109.2856",
              "y": "25.9744"
            }
          },
          {
            "-place_id": "2081",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/580/EXP/ES/2015",
            "location": {
              "x": "-98.35571",
              "y": "26.06025"
            }
          },
          {
            "-place_id": "2082",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/489/EXP/ES/2015",
            "location": {
              "x": "-100.1759",
              "y": "25.7805"
            }
          },
          {
            "-place_id": "2083",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/465/EXP/ES/2015",
            "location": {
              "x": "-103.4519",
              "y": "20.73139"
            }
          },
          {
            "-place_id": "2084",
            "name": "SERVICIO AVENIDA, S.A. DE C.V.",
            "cre_id": "PL/724/EXP/ES/2015",
            "location": {
              "x": "-102.3053",
              "y": "21.89668"
            }
          },
          {
            "-place_id": "2085",
            "name": "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",
            "cre_id": "PL/829/EXP/ES/2015",
            "location": {
              "x": "-101.6677",
              "y": "21.09879"
            }
          },
          {
            "-place_id": "2086",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/584/EXP/ES/2015",
            "location": {
              "x": "-115.3865",
              "y": "32.63511"
            }
          },
          {
            "-place_id": "2087",
            "name": "ESTACION DE SERVICIO PITS, S. DE R.L. DE C.V.",
            "cre_id": "PL/710/EXP/ES/2015",
            "location": {
              "x": "-116.7158",
              "y": "32.49946"
            }
          },
          {
            "-place_id": "2088",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/858/EXP/ES/2015",
            "location": {
              "x": "-106.3973",
              "y": "31.5649"
            }
          },
          {
            "-place_id": "2089",
            "name": "Socombumex, S.A. de C.V.",
            "cre_id": "PL/690/EXP/ES/2015",
            "location": {
              "x": "-104.288",
              "y": "19.07791"
            }
          },
          {
            "-place_id": "2090",
            "name": "Gasolinería Segovia, S.A. de C.V.",
            "cre_id": "PL/699/EXP/ES/2015",
            "location": {
              "x": "-98.99508",
              "y": "19.60755"
            }
          },
          {
            "-place_id": "2091",
            "name": "SERVICIO LOS OLIVOS S.A. DE C.V.(E4394)",
            "cre_id": "PL/786/EXP/ES/2015",
            "location": {
              "x": "-116.5917",
              "y": "31.7838"
            }
          },
          {
            "-place_id": "2092",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/402/EXP/ES/2015",
            "location": {
              "x": "-108.9855",
              "y": "25.80147"
            }
          },
          {
            "-place_id": "2093",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/405/EXP/ES/2015",
            "location": {
              "x": "-100.9704",
              "y": "19.79169"
            }
          },
          {
            "-place_id": "2094",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/590/EXP/ES/2015",
            "location": {
              "x": "-100.2963",
              "y": "25.82625"
            }
          },
          {
            "-place_id": "2095",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/417/EXP/ES/2015",
            "location": {
              "x": "-104.8868",
              "y": "21.52222"
            }
          },
          {
            "-place_id": "2096",
            "name": "Inmobiliaria Corredor Tultitlán, S.A. de C.V. ",
            "cre_id": "PL/820/EXP/ES/2015",
            "location": {
              "x": "-99.10838",
              "y": "19.67871"
            }
          },
          {
            "-place_id": "2097",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/601/EXP/ES/2015",
            "location": {
              "x": "-115.4722",
              "y": "32.60843"
            }
          },
          {
            "-place_id": "2098",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/553/EXP/ES/2015",
            "location": {
              "x": "-99.10677",
              "y": "19.63609"
            }
          },
          {
            "-place_id": "2099",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/373/EXP/ES/2015",
            "location": {
              "x": "-104.8489",
              "y": "21.47011"
            }
          },
          {
            "-place_id": "2100",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/451/EXP/ES/2015",
            "location": {
              "x": "-100.2104",
              "y": "25.73217"
            }
          },
          {
            "-place_id": "2101",
            "name": "CRUCERO LAS GOLONDRINAS,SA DE CV",
            "cre_id": "PL/892/EXP/ES/2015",
            "location": {
              "x": "-103.7721",
              "y": "19.14014"
            }
          },
          {
            "-place_id": "2102",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/707/EXP/ES/2015",
            "location": {
              "x": "-116.953",
              "y": "32.49127"
            }
          },
          {
            "-place_id": "2103",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/594/EXP/ES/2015",
            "location": {
              "x": "-100.1302",
              "y": "25.70155"
            }
          },
          {
            "-place_id": "2104",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/660/EXP/ES/2015",
            "location": {
              "x": "-116.9663",
              "y": "32.51104"
            }
          },
          {
            "-place_id": "2105",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/365/EXP/ES/2015",
            "location": {
              "x": "-105.2828",
              "y": "21.54249"
            }
          },
          {
            "-place_id": "2106",
            "name": "ESTACION DE SERVICIO AUTOMOTRIZ DEL NORTE SA DE CV",
            "cre_id": "PL/845/EXP/ES/2015",
            "location": {
              "x": "-102.2924",
              "y": "21.91625"
            }
          },
          {
            "-place_id": "2107",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/685/EXP/ES/2015",
            "location": {
              "x": "-100.9351",
              "y": "29.30929"
            }
          },
          {
            "-place_id": "2108",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/577/EXP/ES/2015",
            "location": {
              "x": "-103.3228",
              "y": "25.53419"
            }
          },
          {
            "-place_id": "2109",
            "name": "MULTISERVICIOS SIGAS S.A. DE C.V.",
            "cre_id": "PL/655/EXP/ES/2015",
            "location": {
              "x": "-102.4106",
              "y": "22.14957"
            }
          },
          {
            "-place_id": "2110",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/374/EXP/ES/2015",
            "location": {
              "x": "-109.0138",
              "y": "25.73669"
            }
          },
          {
            "-place_id": "2111",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/592/EXP/ES/2015",
            "location": {
              "x": "-98.38633",
              "y": "26.04917"
            }
          },
          {
            "-place_id": "2112",
            "name": "Servicio Vega Atizapan, S.A. de C.V.",
            "cre_id": "PL/879/EXP/ES/2015",
            "location": {
              "x": "-99.25086",
              "y": "19.55827"
            }
          },
          {
            "-place_id": "2113",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/686/EXP/ES/2015",
            "location": {
              "x": "-116.977",
              "y": "32.50455"
            }
          },
          {
            "-place_id": "2114",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/571/EXP/ES/2015",
            "location": {
              "x": "-100.1915",
              "y": "25.72328"
            }
          },
          {
            "-place_id": "2115",
            "name": "ESTACION RAMOS, S.A. DE C.V.",
            "cre_id": "PL/812/EXP/ES/2015",
            "location": {
              "x": "-100.941",
              "y": "25.52635"
            }
          },
          {
            "-place_id": "2116",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/477/EXP/ES/2015",
            "location": {
              "x": "-97.53786",
              "y": "25.85833"
            }
          },
          {
            "-place_id": "2117",
            "name": "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",
            "cre_id": "PL/841/EXP/ES/2015",
            "location": {
              "x": "-101.6691",
              "y": "21.12003"
            }
          },
          {
            "-place_id": "2118",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/497/EXP/ES/2015",
            "location": {
              "x": "-100.7924",
              "y": "19.90187"
            }
          },
          {
            "-place_id": "2119",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/517/EXP/ES/2015",
            "location": {
              "x": "-100.1696",
              "y": "25.64484"
            }
          },
          {
            "-place_id": "2120",
            "name": "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V.",
            "cre_id": "PL/833/EXP/ES/2015",
            "location": {
              "x": "-110.93",
              "y": "31.27435"
            }
          },
          {
            "-place_id": "2121",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/427/EXP/ES/2015",
            "location": {
              "x": "-100.3682",
              "y": "25.67366"
            }
          },
          {
            "-place_id": "2122",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/492/EXP/ES/2015",
            "location": {
              "x": "-100.1685",
              "y": "25.71746"
            }
          },
          {
            "-place_id": "2123",
            "name": "SERVICIO DEL CENTRO HIDALGO SA DE CV ",
            "cre_id": "PL/774/EXP/ES/2015",
            "location": {
              "x": "-101.4349",
              "y": "20.94723"
            }
          },
          {
            "-place_id": "2124",
            "name": "SERV.EL TRIANGULO DEL REFUGIO,S.DER.L.DEC.V.",
            "cre_id": "PL/639/EXP/ES/2015",
            "location": {
              "x": "-117.0602",
              "y": "32.53289"
            }
          },
          {
            "-place_id": "2125",
            "name": "AMC COMBUSTIBLES Y LUBRICANTES S.A. DE C.V.",
            "cre_id": "PL/779/EXP/ES/2015",
            "location": {
              "x": "-101.4206",
              "y": "26.91485"
            }
          },
          {
            "-place_id": "2126",
            "name": "SERVICIO RAMA, S.A. DE C.V.",
            "cre_id": "PL/796/EXP/ES/2015",
            "location": {
              "x": "-100.5448",
              "y": "28.70405"
            }
          },
          {
            "-place_id": "2127",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/448/EXP/ES/2015",
            "location": {
              "x": "-100.2944",
              "y": "25.81873"
            }
          },
          {
            "-place_id": "2128",
            "name": "Servicio Ravello S.A de C.V.",
            "cre_id": "PL/792/EXP/ES/2015",
            "location": {
              "x": "-116.917",
              "y": "32.49886"
            }
          },
          {
            "-place_id": "2129",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/849/EXP/ES/2015",
            "location": {
              "x": "-115.3992",
              "y": "32.63718"
            }
          },
          {
            "-place_id": "2130",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/490/EXP/ES/2015",
            "location": {
              "x": "-106.0694",
              "y": "28.65146"
            }
          },
          {
            "-place_id": "2131",
            "name": "INMOBILIARIA ANADECA, S.A. DE C.V.",
            "cre_id": "PL/680/EXP/ES/2015",
            "location": {
              "x": "-117.1202",
              "y": "32.51353"
            }
          },
          {
            "-place_id": "2132",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/413/EXP/ES/2015",
            "location": {
              "x": "-109.0028",
              "y": "25.81053"
            }
          },
          {
            "-place_id": "2133",
            "name": "MARA ESTACION DE SERVICIOS SA DE CV",
            "cre_id": "PL/766/EXP/ES/2015",
            "location": {
              "x": "-102.2631",
              "y": "21.89202"
            }
          },
          {
            "-place_id": "2134",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/617/EXP/ES/2015",
            "location": {
              "x": "-104.8968",
              "y": "21.49442"
            }
          },
          {
            "-place_id": "2135",
            "name": "SERVICIO OROZCO SA DE CV",
            "cre_id": "PL/713/EXP/ES/2015",
            "location": {
              "x": "-99.12276",
              "y": "23.82137"
            }
          },
          {
            "-place_id": "2136",
            "name": "Servicio Puerta de Hierro S.A. de C.V.",
            "cre_id": "PL/770/EXP/ES/2015",
            "location": {
              "x": "-103.7087",
              "y": "19.25796"
            }
          },
          {
            "-place_id": "2137",
            "name": "Gasolinería Real Madeira, S.A. de C.V.",
            "cre_id": "PL/835/EXP/ES/2015",
            "location": {
              "x": "-99.02091",
              "y": "19.57863"
            }
          },
          {
            "-place_id": "2138",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/476/EXP/ES/2015",
            "location": {
              "x": "-100.9133",
              "y": "25.43487"
            }
          },
          {
            "-place_id": "2139",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/483/EXP/ES/2015",
            "location": {
              "x": "-98.31638",
              "y": "26.06835"
            }
          },
          {
            "-place_id": "2140",
            "name": "Inmobiliaria Socor, S.A. de C.V.",
            "cre_id": "PL/630/EXP/ES/2015",
            "location": {
              "x": "-99.13939",
              "y": "19.71715"
            }
          },
          {
            "-place_id": "2141",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/394/EXP/ES/2015",
            "location": {
              "x": "-115.5029",
              "y": "32.59509"
            }
          },
          {
            "-place_id": "2142",
            "name": "Gasolinería Itálica, S.A. de C.V.",
            "cre_id": "PL/632/EXP/ES/2015",
            "location": {
              "x": "-99.2491",
              "y": "19.53231"
            }
          },
          {
            "-place_id": "2143",
            "name": "Super Servicio Cumbre, S.A. de C.V.",
            "cre_id": "PL/853/EXP/ES/2015",
            "location": {
              "x": "-99.21558",
              "y": "18.90457"
            }
          },
          {
            "-place_id": "2144",
            "name": "ESTACIONES DE SERVICIO CAMINOS DE GUANAJUATO SA CV",
            "cre_id": "PL/893/EXP/ES/2015",
            "location": {
              "x": "-100.9016",
              "y": "21.16531"
            }
          },
          {
            "-place_id": "2145",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/519/EXP/ES/2015",
            "location": {
              "x": "-100.995",
              "y": "25.47064"
            }
          },
          {
            "-place_id": "2146",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/523/EXP/ES/2015",
            "location": {
              "x": "-100.3883",
              "y": "25.77217"
            }
          },
          {
            "-place_id": "2147",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/563/EXP/ES/2015",
            "location": {
              "x": "-100.2403",
              "y": "25.71573"
            }
          },
          {
            "-place_id": "2148",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/464/EXP/ES/2015",
            "location": {
              "x": "-100.0302",
              "y": "25.28464"
            }
          },
          {
            "-place_id": "2149",
            "name": "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V.",
            "cre_id": "PL/834/EXP/ES/2015",
            "location": {
              "x": "-110.9418",
              "y": "31.28525"
            }
          },
          {
            "-place_id": "2150",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/467/EXP/ES/2015",
            "location": {
              "x": "-98.39253",
              "y": "26.04565"
            }
          },
          {
            "-place_id": "2151",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/485/EXP/ES/2015",
            "location": {
              "x": "-100.9813",
              "y": "25.48239"
            }
          },
          {
            "-place_id": "2152",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/494/EXP/ES/2015",
            "location": {
              "x": "-100.2887",
              "y": "25.71853"
            }
          },
          {
            "-place_id": "2153",
            "name": "Inmobiliaria RAVS, S.A. de C.V.",
            "cre_id": "PL/695/EXP/ES/2015",
            "location": {
              "x": "-99.08196",
              "y": "19.37504"
            }
          },
          {
            "-place_id": "2154",
            "name": "GASOLINA Y LUBRICANTES MALPASO SA DE CV ",
            "cre_id": "PL/725/EXP/ES/2015",
            "location": {
              "x": "-93.56612",
              "y": "17.18763"
            }
          },
          {
            "-place_id": "2155",
            "name": "SERVICIO EFIGAS, S. DE R.L. DE C.V.",
            "cre_id": "PL/678/EXP/ES/2015",
            "location": {
              "x": "-117.0082",
              "y": "32.52866"
            }
          },
          {
            "-place_id": "2156",
            "name": "SERVICIOS ENERGETICOS DEL PACIFICO SA DE CV",
            "cre_id": "PL/727/EXP/ES/2015",
            "location": {
              "x": "-104.3236",
              "y": "19.11446"
            }
          },
          {
            "-place_id": "2157",
            "name": "Gasolinería México - Ajusco 1, S.A. de C.V.",
            "cre_id": "PL/821/EXP/ES/2015",
            "location": {
              "x": "-99.19692",
              "y": "19.2289"
            }
          },
          {
            "-place_id": "2158",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/421/EXP/ES/2015",
            "location": {
              "x": "-105.2224",
              "y": "20.65418"
            }
          },
          {
            "-place_id": "2159",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/501/EXP/ES/2015",
            "location": {
              "x": "-101.1592",
              "y": "20.20225"
            }
          },
          {
            "-place_id": "2160",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/383/EXP/ES/2015",
            "location": {
              "x": "-114.7834",
              "y": "32.47077"
            }
          },
          {
            "-place_id": "2161",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/559/EXP/ES/2015",
            "location": {
              "x": "-100.9898",
              "y": "25.38848"
            }
          },
          {
            "-place_id": "2162",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/510/EXP/ES/2015",
            "location": {
              "x": "-103.4574",
              "y": "25.55805"
            }
          },
          {
            "-place_id": "2163",
            "name": "ESTACION DE SERVICIO TEZONTEPEC S.A. DE C.V.",
            "cre_id": "PL/719/EXP/ES/2015",
            "location": {
              "x": "-99.26816",
              "y": "20.19257"
            }
          },
          {
            "-place_id": "2164",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/729/EXP/ES/2015",
            "location": {
              "x": "-116.9314",
              "y": "32.48362"
            }
          },
          {
            "-place_id": "2165",
            "name": "Estación de Servicio Cordoba, S.A. de C.V.",
            "cre_id": "PL/664/EXP/ES/2015",
            "location": {
              "x": "-99.20078",
              "y": "18.91205"
            }
          },
          {
            "-place_id": "2166",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/702/EXP/ES/2015",
            "location": {
              "x": "-117.0217",
              "y": "32.51695"
            }
          },
          {
            "-place_id": "2167",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/378/EXP/ES/2015",
            "location": {
              "x": "-115.4283",
              "y": "32.60439"
            }
          },
          {
            "-place_id": "2168",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/847/EXP/ES/2015",
            "location": {
              "x": "-106.5244",
              "y": "31.77218"
            }
          },
          {
            "-place_id": "2169",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/419/EXP/ES/2015",
            "location": {
              "x": "-103.4172",
              "y": "20.64037"
            }
          },
          {
            "-place_id": "2170",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/414/EXP/ES/2015",
            "location": {
              "x": "-101.0983",
              "y": "19.78714"
            }
          },
          {
            "-place_id": "2171",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/870/EXP/ES/2015",
            "location": {
              "x": "-106.4938",
              "y": "31.72176"
            }
          },
          {
            "-place_id": "2172",
            "name": "SERVICIO GENCAR, S.A. DE C.V.",
            "cre_id": "PL/805/EXP/ES/2015",
            "location": {
              "x": "-91.8837",
              "y": "18.64528"
            }
          },
          {
            "-place_id": "2173",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/393/EXP/ES/2015",
            "location": {
              "x": "-115.3589",
              "y": "32.55959"
            }
          },
          {
            "-place_id": "2174",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/384/EXP/ES/2015",
            "location": {
              "x": "-115.3366",
              "y": "32.56762"
            }
          },
          {
            "-place_id": "2175",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/622/EXP/ES/2015",
            "location": {
              "x": "-103.4968",
              "y": "25.59786"
            }
          },
          {
            "-place_id": "2176",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/435/EXP/ES/2015",
            "location": {
              "x": "-99.23218",
              "y": "19.47735"
            }
          },
          {
            "-place_id": "2177",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/466/EXP/ES/2015",
            "location": {
              "x": "-100.174",
              "y": "25.73397"
            }
          },
          {
            "-place_id": "2178",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/570/EXP/ES/2015",
            "location": {
              "x": "-100.273",
              "y": "25.76927"
            }
          },
          {
            "-place_id": "2179",
            "name": "GAS SANFER S. DE R.L. DE C.V.",
            "cre_id": "PL/755/EXP/ES/2015",
            "location": {
              "x": "-103.719",
              "y": "19.24986"
            }
          },
          {
            "-place_id": "2180",
            "name": "COMBU-EXPRESS, S.A. DE C.V.",
            "cre_id": "PL/769/EXP/ES/2015",
            "location": {
              "x": "-104.8626",
              "y": "21.49188"
            }
          },
          {
            "-place_id": "2181",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/450/EXP/ES/2015",
            "location": {
              "x": "-100.1586",
              "y": "25.78579"
            }
          },
          {
            "-place_id": "2182",
            "name": "Servicio Jacarandas, S.A. de C.V.",
            "cre_id": "PL/854/EXP/ES/2015",
            "location": {
              "x": "-99.0181",
              "y": "19.61462"
            }
          },
          {
            "-place_id": "2183",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/429/EXP/ES/2015",
            "location": {
              "x": "-98.29991",
              "y": "26.08213"
            }
          },
          {
            "-place_id": "2184",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/534/EXP/ES/2015",
            "location": {
              "x": "-105.2258",
              "y": "20.69032"
            }
          },
          {
            "-place_id": "2185",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/379/EXP/ES/2015",
            "location": {
              "x": "-109.0079",
              "y": "25.74504"
            }
          },
          {
            "-place_id": "2186",
            "name": "Estación de Servicio Marbella, S.A. de C.V.",
            "cre_id": "PL/692/EXP/ES/2015",
            "location": {
              "x": "-99.07384",
              "y": "19.54896"
            }
          },
          {
            "-place_id": "2187",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/614/EXP/ES/2015",
            "location": {
              "x": "-98.33501",
              "y": "26.06836"
            }
          },
          {
            "-place_id": "2188",
            "name": "Gasolinería Ulises, S.A. de C.V.",
            "cre_id": "PL/648/EXP/ES/2015",
            "location": {
              "x": "-99.2403",
              "y": "19.62737"
            }
          },
          {
            "-place_id": "2189",
            "name": "ARY SUPER SERVICIOS VI, SA DE CV",
            "cre_id": "PL/852/EXP/ES/2015",
            "location": {
              "x": "-103.3994",
              "y": "25.59699"
            }
          },
          {
            "-place_id": "2190",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/574/EXP/ES/2015",
            "location": {
              "x": "-99.05198",
              "y": "19.54947"
            }
          },
          {
            "-place_id": "2191",
            "name": "Estación de Servicio Cuenca, S.A. de C.V. ",
            "cre_id": "PL/693/EXP/ES/2015",
            "location": {
              "x": "-97.85314",
              "y": "22.254"
            }
          },
          {
            "-place_id": "2192",
            "name": "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",
            "cre_id": "PL/859/EXP/ES/2015",
            "location": {
              "x": "-101.6542",
              "y": "21.15335"
            }
          },
          {
            "-place_id": "2193",
            "name": "DALROM S.A DE C.V.",
            "cre_id": "PL/757/EXP/ES/2015",
            "location": {
              "x": "-102.2435",
              "y": "21.87411"
            }
          },
          {
            "-place_id": "2194",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/555/EXP/ES/2015",
            "location": {
              "x": "-100.261",
              "y": "25.79039"
            }
          },
          {
            "-place_id": "2195",
            "name": "COMBUSTIBLES ARCOTETE S.A. DE C.V.",
            "cre_id": "PL/735/EXP/ES/2015",
            "location": {
              "x": "-92.60492",
              "y": "16.73734"
            }
          },
          {
            "-place_id": "2196",
            "name": "Estación de Servicio la Rioja, S.A. de C.V.",
            "cre_id": "PL/647/EXP/ES/2015",
            "location": {
              "x": "-99.08937",
              "y": "19.82526"
            }
          },
          {
            "-place_id": "2197",
            "name": "servicio el toreo de saltillo sa de cv",
            "cre_id": "PL/771/EXP/ES/2015",
            "location": {
              "x": "-100.9147",
              "y": "25.44261"
            }
          },
          {
            "-place_id": "2198",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/514/EXP/ES/2015",
            "location": {
              "x": "-100.4822",
              "y": "25.67927"
            }
          },
          {
            "-place_id": "2199",
            "name": "SERVICIO SIERRA DE ARTEAGA SA DE CV",
            "cre_id": "PL/783/EXP/ES/2015",
            "location": {
              "x": "-100.8774",
              "y": "25.44026"
            }
          },
          {
            "-place_id": "2200",
            "name": "DIAZ GAS, S.A. DE C.V.",
            "cre_id": "PL/761/EXP/ES/2015",
            "location": {
              "x": "-106.4253",
              "y": "31.7462"
            }
          },
          {
            "-place_id": "2201",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/458/EXP/ES/2015",
            "location": {
              "x": "-100.1629",
              "y": "25.70878"
            }
          },
          {
            "-place_id": "2202",
            "name": "ESTACION TALLERES S.A. DE C.V.",
            "cre_id": "PL/888/EXP/ES/2015",
            "location": {
              "x": "-86.88126",
              "y": "21.15601"
            }
          },
          {
            "-place_id": "2203",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/564/EXP/ES/2015",
            "location": {
              "x": "-100.3628",
              "y": "25.71314"
            }
          },
          {
            "-place_id": "2204",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/520/EXP/ES/2015",
            "location": {
              "x": "-100.2664",
              "y": "25.66576"
            }
          },
          {
            "-place_id": "2205",
            "name": "GRUPO LONOR, S.A. DE C.V.  E11919",
            "cre_id": "PL/874/EXP/ES/2015",
            "location": {
              "x": "-91.96599",
              "y": "15.8336"
            }
          },
          {
            "-place_id": "2206",
            "name": "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",
            "cre_id": "PL/877/EXP/ES/2015",
            "location": {
              "x": "-101.6518",
              "y": "21.07652"
            }
          },
          {
            "-place_id": "2207",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/504/EXP/ES/2015",
            "location": {
              "x": "-104.2044",
              "y": "19.80471"
            }
          },
          {
            "-place_id": "2208",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/416/EXP/ES/2015",
            "location": {
              "x": "-104.883",
              "y": "21.49595"
            }
          },
          {
            "-place_id": "2209",
            "name": "GASOLINERAS PABA SA DE CV ",
            "cre_id": "PL/733/EXP/ES/2015",
            "location": {
              "x": "-110.2945",
              "y": "24.12212"
            }
          },
          {
            "-place_id": "2210",
            "name": "SERVICIO GASOL SA DE CV",
            "cre_id": "PL/883/EXP/ES/2015",
            "location": {
              "x": "-103.3947",
              "y": "25.55813"
            }
          },
          {
            "-place_id": "2211",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/542/EXP/ES/2015",
            "location": {
              "x": "-98.23244",
              "y": "26.02191"
            }
          },
          {
            "-place_id": "2212",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/709/EXP/ES/2015",
            "location": {
              "x": "-117.0261",
              "y": "32.5229"
            }
          },
          {
            "-place_id": "2213",
            "name": "ESTACION AMBAR, S. DE R.L. DE C.V.",
            "cre_id": "PL/722/EXP/ES/2015",
            "location": {
              "x": "-116.924",
              "y": "32.49483"
            }
          },
          {
            "-place_id": "2214",
            "name": "Estación de Servicio Venta de Carpio, S.A. de C.V.",
            "cre_id": "PL/819/EXP/ES/2015",
            "location": {
              "x": "-99.00452",
              "y": "19.6214"
            }
          },
          {
            "-place_id": "2215",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/370/EXP/ES/2015",
            "location": {
              "x": "-109.0119",
              "y": "25.78968"
            }
          },
          {
            "-place_id": "2216",
            "name": "GASOLINERAS PABA SA DE CV ",
            "cre_id": "PL/688/EXP/ES/2015",
            "location": {
              "x": "-110.314",
              "y": "24.14254"
            }
          },
          {
            "-place_id": "2217",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/540/EXP/ES/2015",
            "location": {
              "x": "-100.4024",
              "y": "25.76277"
            }
          },
          {
            "-place_id": "2218",
            "name": "ENERGETICOS Y SERVICIOS OCOZOCOAUTLA  SA DE CV ",
            "cre_id": "PL/765/EXP/ES/2015",
            "location": {
              "x": "-92.34282",
              "y": "14.91567"
            }
          },
          {
            "-place_id": "2219",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/600/EXP/ES/2015",
            "location": {
              "x": "-100.253",
              "y": "25.73068"
            }
          },
          {
            "-place_id": "2220",
            "name": "APOYOS Y SUMIN.COMERCIALES E INDUST. S.A. DE C.V. ",
            "cre_id": "PL/633/EXP/ES/2015",
            "location": {
              "x": "-117.0852",
              "y": "32.52634"
            }
          },
          {
            "-place_id": "2221",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/398/EXP/ES/2015",
            "location": {
              "x": "-115.3744",
              "y": "32.65948"
            }
          },
          {
            "-place_id": "2222",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/389/EXP/ES/2015",
            "location": {
              "x": "-115.4325",
              "y": "32.59562"
            }
          },
          {
            "-place_id": "2223",
            "name": "ESTACION CUCAPAH, S.A. DE C.V.",
            "cre_id": "PL/687/EXP/ES/2015",
            "location": {
              "x": "-116.8796",
              "y": "32.51322"
            }
          },
          {
            "-place_id": "2224",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/603/EXP/ES/2015",
            "location": {
              "x": "-100.264",
              "y": "25.82103"
            }
          },
          {
            "-place_id": "2225",
            "name": "ESTACION GRUGAS, S. DE R.L. DE C.V.",
            "cre_id": "PL/669/EXP/ES/2015",
            "location": {
              "x": "-116.9147",
              "y": "32.53901"
            }
          },
          {
            "-place_id": "2226",
            "name": "DISTRIBUIDORA DE COBUSTIBLES LAS CAÑADAS SA DE CV ",
            "cre_id": "PL/739/EXP/ES/2015",
            "location": {
              "x": "-90.63845",
              "y": "16.08285"
            }
          },
          {
            "-place_id": "2227",
            "name": "servicios energeticos brisas sa de cv",
            "cre_id": "PL/741/EXP/ES/2015",
            "location": {
              "x": "-100.9835",
              "y": "25.48155"
            }
          },
          {
            "-place_id": "2228",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/589/EXP/ES/2015",
            "location": {
              "x": "-100.3206",
              "y": "25.78637"
            }
          },
          {
            "-place_id": "2229",
            "name": "PETRO SERVICIOS DEL SURESTE SA DE CV",
            "cre_id": "PL/643/EXP/ES/2015",
            "location": {
              "x": "-93.12914",
              "y": "17.90663"
            }
          },
          {
            "-place_id": "2230",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/716/EXP/ES/2015",
            "location": {
              "x": "-115.4722",
              "y": "32.65059"
            }
          },
          {
            "-place_id": "2231",
            "name": "GASOLINERIA LAZARO CHANONA BORGES SA DE CV ",
            "cre_id": "PL/777/EXP/ES/2015",
            "location": {
              "x": "-93.38528",
              "y": "16.76469"
            }
          },
          {
            "-place_id": "2232",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/547/EXP/ES/2015",
            "location": {
              "x": "-100.318",
              "y": "25.77943"
            }
          },
          {
            "-place_id": "2233",
            "name": "GASOLINERA NORPONIENTE S.A. DE C.V.",
            "cre_id": "PL/889/EXP/ES/2015",
            "location": {
              "x": "-86.89943",
              "y": "21.14857"
            }
          },
          {
            "-place_id": "2234",
            "name": "DISTRIBUIDORA DE COBUSTIBLES LAS CAÑADAS SA DE CV ",
            "cre_id": "PL/736/EXP/ES/2015",
            "location": {
              "x": "-90.65433",
              "y": "16.50013"
            }
          },
          {
            "-place_id": "2235",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/598/EXP/ES/2015",
            "location": {
              "x": "-99.0914",
              "y": "19.6322"
            }
          },
          {
            "-place_id": "2236",
            "name": "Estación de Servicio Cantabria, S.A. de C.V.",
            "cre_id": "PL/822/EXP/ES/2015",
            "location": {
              "x": "-99.19987",
              "y": "18.88947"
            }
          },
          {
            "-place_id": "2237",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/424/EXP/ES/2015",
            "location": {
              "x": "-105.2634",
              "y": "21.0257"
            }
          },
          {
            "-place_id": "2238",
            "name": "GASOLINERA GUASAVE SA DE CV",
            "cre_id": "PL/903/EXP/ES/2015",
            "location": {
              "x": "-108.4668",
              "y": "25.56817"
            }
          },
          {
            "-place_id": "2239",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/495/EXP/ES/2015",
            "location": {
              "x": "-98.29279",
              "y": "26.08957"
            }
          },
          {
            "-place_id": "2240",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/403/EXP/ES/2015",
            "location": {
              "x": "-115.5797",
              "y": "32.58874"
            }
          },
          {
            "-place_id": "2241",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/391/EXP/ES/2015",
            "location": {
              "x": "-109.0046",
              "y": "25.79292"
            }
          },
          {
            "-place_id": "2242",
            "name": "SERVICIO JARDINES, S.A. DE C.V. ( ES12369)",
            "cre_id": "PL/671/EXP/ES/2015",
            "location": {
              "x": "-90.04852",
              "y": "20.3788"
            }
          },
          {
            "-place_id": "2243",
            "name": "Gasolinera Colon S.A. de C.V.",
            "cre_id": "PL/828/EXP/ES/2015",
            "location": {
              "x": "-103.3658",
              "y": "20.65207"
            }
          },
          {
            "-place_id": "2244",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/569/EXP/ES/2015",
            "location": {
              "x": "-100.3575",
              "y": "25.69688"
            }
          },
          {
            "-place_id": "2245",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/363/EXP/ES/2015",
            "location": {
              "x": "-104.8595",
              "y": "21.47486"
            }
          },
          {
            "-place_id": "2246",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/390/EXP/ES/2015",
            "location": {
              "x": "-108.9919",
              "y": "25.82133"
            }
          },
          {
            "-place_id": "2247",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/527/EXP/ES/2015",
            "location": {
              "x": "-100.9627",
              "y": "25.50189"
            }
          },
          {
            "-place_id": "2248",
            "name": "OPERADORA LAS CRUCES SA DE CV",
            "cre_id": "PL/791/EXP/ES/2015",
            "location": {
              "x": "-100.5463",
              "y": "28.70271"
            }
          },
          {
            "-place_id": "2249",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/478/EXP/ES/2015",
            "location": {
              "x": "-106.1335",
              "y": "28.68869"
            }
          },
          {
            "-place_id": "2250",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/830/EXP/ES/2015",
            "location": {
              "x": "-106.4936",
              "y": "31.72121"
            }
          },
          {
            "-place_id": "2251",
            "name": "Estacion El Encanto S.A. de C.V.",
            "cre_id": "PL/726/EXP/ES/2015",
            "location": {
              "x": "-116.6503",
              "y": "32.56519"
            }
          },
          {
            "-place_id": "2252",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/382/EXP/ES/2015",
            "location": {
              "x": "-115.483",
              "y": "32.59637"
            }
          },
          {
            "-place_id": "2253",
            "name": "Gasolinería Turquesa, S.A. de C.V. ",
            "cre_id": "PL/864/EXP/ES/2015",
            "location": {
              "x": "-99.07876",
              "y": "19.67295"
            }
          },
          {
            "-place_id": "2254",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/381/EXP/ES/2015",
            "location": {
              "x": "-108.9903",
              "y": "25.76621"
            }
          },
          {
            "-place_id": "2255",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/469/EXP/ES/2015",
            "location": {
              "x": "-100.4128",
              "y": "25.76333"
            }
          },
          {
            "-place_id": "2256",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/869/EXP/ES/2015",
            "location": {
              "x": "-116.8668",
              "y": "32.50251"
            }
          },
          {
            "-place_id": "2257",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/535/EXP/ES/2015",
            "location": {
              "x": "-105.3483",
              "y": "20.95066"
            }
          },
          {
            "-place_id": "2258",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/376/EXP/ES/2015",
            "location": {
              "x": "-108.7157",
              "y": "25.70819"
            }
          },
          {
            "-place_id": "2259",
            "name": "DIAZ GAS, S.A. DE C.V.",
            "cre_id": "PL/776/EXP/ES/2015",
            "location": {
              "x": "-106.4733",
              "y": "31.7203"
            }
          },
          {
            "-place_id": "2260",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/682/EXP/ES/2015",
            "location": {
              "x": "-115.506",
              "y": "32.64334"
            }
          },
          {
            "-place_id": "2261",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/597/EXP/ES/2015",
            "location": {
              "x": "-100.5805",
              "y": "25.78744"
            }
          },
          {
            "-place_id": "2262",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/400/EXP/ES/2015",
            "location": {
              "x": "-101.2223",
              "y": "19.67717"
            }
          },
          {
            "-place_id": "2263",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/434/EXP/ES/2015",
            "location": {
              "x": "-100.846",
              "y": "25.44611"
            }
          },
          {
            "-place_id": "2264",
            "name": "SERVICIO PALAU, SA DE CV",
            "cre_id": "PL/673/EXP/ES/2015",
            "location": {
              "x": "-101.4273",
              "y": "27.88953"
            }
          },
          {
            "-place_id": "2265",
            "name": "ARY SUPER SERVICIOS II, SA DE CV",
            "cre_id": "PL/886/EXP/ES/2015",
            "location": {
              "x": "-103.5191",
              "y": "25.54451"
            }
          },
          {
            "-place_id": "2266",
            "name": "Gaeli Diesel, S.A. de C.V.",
            "cre_id": "PL/872/EXP/ES/2015",
            "location": {
              "x": "-91.82955",
              "y": "18.65546"
            }
          },
          {
            "-place_id": "2267",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/537/EXP/ES/2015",
            "location": {
              "x": "-99.10912",
              "y": "19.47922"
            }
          },
          {
            "-place_id": "2268",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/670/EXP/ES/2015",
            "location": {
              "x": "-117.0165",
              "y": "32.53784"
            }
          },
          {
            "-place_id": "2269",
            "name": "COMBUSTIBLES Y REPARACIONES DE CHIAPAS SA DE CV",
            "cre_id": "PL/844/EXP/ES/2015",
            "location": {
              "x": "-93.1921",
              "y": "16.76767"
            }
          },
          {
            "-place_id": "2270",
            "name": "ESTACION LA VICTORIA, S.A. DE C.V.",
            "cre_id": "PL/657/EXP/ES/2015",
            "location": {
              "x": "-116.6227",
              "y": "32.57238"
            }
          },
          {
            "-place_id": "2271",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/578/EXP/ES/2015",
            "location": {
              "x": "-100.2961",
              "y": "25.75637"
            }
          },
          {
            "-place_id": "2272",
            "name": "Gasolinería Magnolias, S.A. de C.V.",
            "cre_id": "PL/631/EXP/ES/2015",
            "location": {
              "x": "-99.09545",
              "y": "19.37437"
            }
          },
          {
            "-place_id": "2273",
            "name": "OPERADORA DE COMBUSTIBLE SA DE CV",
            "cre_id": "PL/782/EXP/ES/2015",
            "location": {
              "x": "-110.2967",
              "y": "24.1315"
            }
          },
          {
            "-place_id": "2274",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/552/EXP/ES/2015",
            "location": {
              "x": "-98.27705",
              "y": "26.00909"
            }
          },
          {
            "-place_id": "2275",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/605/EXP/ES/2015",
            "location": {
              "x": "-116.9097",
              "y": "32.51204"
            }
          },
          {
            "-place_id": "2276",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/361/EXP/ES/2015",
            "location": {
              "x": "-108.9416",
              "y": "25.8021"
            }
          },
          {
            "-place_id": "2277",
            "name": "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V.",
            "cre_id": "PL/840/EXP/ES/2015",
            "location": {
              "x": "-105.3485",
              "y": "20.76174"
            }
          },
          {
            "-place_id": "2278",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/521/EXP/ES/2015",
            "location": {
              "x": "-100.1539",
              "y": "25.42441"
            }
          },
          {
            "-place_id": "2279",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/543/EXP/ES/2015",
            "location": {
              "x": "-103.4968",
              "y": "25.5994"
            }
          },
          {
            "-place_id": "2280",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/529/EXP/ES/2015",
            "location": {
              "x": "-103.3584",
              "y": "25.53979"
            }
          },
          {
            "-place_id": "2281",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/515/EXP/ES/2015",
            "location": {
              "x": "-100.1625",
              "y": "25.73066"
            }
          },
          {
            "-place_id": "2282",
            "name": "SERVICIO 8 DE ENERO S.A. DE C.V.",
            "cre_id": "PL/763/EXP/ES/2015",
            "location": {
              "x": "-101.4921",
              "y": "26.99841"
            }
          },
          {
            "-place_id": "2283",
            "name": "GASOLINERA EL 27 SA DE CV",
            "cre_id": "PL/703/EXP/ES/2015",
            "location": {
              "x": "-99.16292",
              "y": "23.73274"
            }
          },
          {
            "-place_id": "2284",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/486/EXP/ES/2015",
            "location": {
              "x": "-100.1952",
              "y": "25.69145"
            }
          },
          {
            "-place_id": "2285",
            "name": "Administradora Profesional de Gasolineras de México, S. de R. L. de C. V.",
            "cre_id": "PL/863/EXP/ES/2015",
            "location": {
              "x": "-115.4868",
              "y": "32.66468"
            }
          },
          {
            "-place_id": "2286",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/602/EXP/ES/2015",
            "location": {
              "x": "-100.3921",
              "y": "25.67348"
            }
          },
          {
            "-place_id": "2287",
            "name": "Estación de Servicio Sauvage, S.A. de C.V.",
            "cre_id": "PL/826/EXP/ES/2015",
            "location": {
              "x": "-99.02579",
              "y": "19.61582"
            }
          },
          {
            "-place_id": "2288",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/411/EXP/ES/2015",
            "location": {
              "x": "-101.0389",
              "y": "19.82875"
            }
          },
          {
            "-place_id": "2289",
            "name": "ESTACION DEL ROBLE, S.A. DE C.V.",
            "cre_id": "PL/642/EXP/ES/2015",
            "location": {
              "x": "-116.9525",
              "y": "32.43441"
            }
          },
          {
            "-place_id": "2290",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/541/EXP/ES/2015",
            "location": {
              "x": "-100.2357",
              "y": "25.71714"
            }
          },
          {
            "-place_id": "2291",
            "name": "GASOPRIM SA DE CV",
            "cre_id": "PL/758/EXP/ES/2015",
            "location": {
              "x": "-103.7026",
              "y": "19.2684"
            }
          },
          {
            "-place_id": "2292",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/420/EXP/ES/2015",
            "location": {
              "x": "-104.9266",
              "y": "21.52014"
            }
          },
          {
            "-place_id": "2293",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/369/EXP/ES/2015",
            "location": {
              "x": "-108.9937",
              "y": "25.76829"
            }
          },
          {
            "-place_id": "2294",
            "name": "GASOLINERIA LOMALINDA 0194 S.A DE C.V.",
            "cre_id": "PL/843/EXP/ES/2015",
            "location": {
              "x": "-99.21804",
              "y": "19.42066"
            }
          },
          {
            "-place_id": "2295",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/509/EXP/ES/2015",
            "location": {
              "x": "-105.3746",
              "y": "20.76066"
            }
          },
          {
            "-place_id": "2296",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/488/EXP/ES/2015",
            "location": {
              "x": "-100.9607",
              "y": "25.47087"
            }
          },
          {
            "-place_id": "2297",
            "name": "ENERGETICOS CERRO DE ORTEGA SA DE CV",
            "cre_id": "PL/753/EXP/ES/2015",
            "location": {
              "x": "-103.729",
              "y": "18.76095"
            }
          },
          {
            "-place_id": "2298",
            "name": "DESARROLLO INTEGRAL OCOZOCOAUTLA SA DE CV ",
            "cre_id": "PL/743/EXP/ES/2015",
            "location": {
              "x": "-91.99803",
              "y": "15.70444"
            }
          },
          {
            "-place_id": "2299",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/565/EXP/ES/2015",
            "location": {
              "x": "-103.4483",
              "y": "25.54146"
            }
          },
          {
            "-place_id": "2300",
            "name": "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V.",
            "cre_id": "PL/718/EXP/ES/2015",
            "location": {
              "x": "-116.585",
              "y": "32.56567"
            }
          },
          {
            "-place_id": "2301",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/526/EXP/ES/2015",
            "location": {
              "x": "-100.2573",
              "y": "25.76571"
            }
          },
          {
            "-place_id": "2302",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/512/EXP/ES/2015",
            "location": {
              "x": "-103.4711",
              "y": "20.54878"
            }
          },
          {
            "-place_id": "2303",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/539/EXP/ES/2015",
            "location": {
              "x": "-98.33169",
              "y": "26.07043"
            }
          },
          {
            "-place_id": "2304",
            "name": "SERV.EL TRIANGULO DEL REFUGIO,S.DER.L.DEC.V.",
            "cre_id": "PL/644/EXP/ES/2015",
            "location": {
              "x": "-116.9668",
              "y": "32.40604"
            }
          },
          {
            "-place_id": "2305",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/616/EXP/ES/2015",
            "location": {
              "x": "-101.1545",
              "y": "19.70107"
            }
          },
          {
            "-place_id": "2306",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/862/EXP/ES/2015",
            "location": {
              "x": "-106.4634",
              "y": "31.64773"
            }
          },
          {
            "-place_id": "2307",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/637/EXP/ES/2015",
            "location": {
              "x": "-116.9861",
              "y": "32.50862"
            }
          },
          {
            "-place_id": "2308",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/449/EXP/ES/2015",
            "location": {
              "x": "-116.5928",
              "y": "31.79353"
            }
          },
          {
            "-place_id": "2309",
            "name": "SERVICIO EFIGAS, S. DE R.L. DE C.V.",
            "cre_id": "PL/732/EXP/ES/2015",
            "location": {
              "x": "-117.0203",
              "y": "32.49725"
            }
          },
          {
            "-place_id": "2310",
            "name": "Operadora Santa Elena, S.A. de C.V.",
            "cre_id": "PL/694/EXP/ES/2015",
            "location": {
              "x": "-99.2113",
              "y": "19.2257"
            }
          },
          {
            "-place_id": "2311",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/362/EXP/ES/2015",
            "location": {
              "x": "-108.9826",
              "y": "25.80633"
            }
          },
          {
            "-place_id": "2312",
            "name": "GASOLINERA EL ENCINO S.A. DE C.V",
            "cre_id": "PL/813/EXP/ES/2015",
            "location": {
              "x": "-100.7522",
              "y": "28.44654"
            }
          },
          {
            "-place_id": "2313",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/456/EXP/ES/2015",
            "location": {
              "x": "-100.9761",
              "y": "25.45598"
            }
          },
          {
            "-place_id": "2314",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/455/EXP/ES/2015",
            "location": {
              "x": "-100.4806",
              "y": "25.68477"
            }
          },
          {
            "-place_id": "2315",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/385/EXP/ES/2015",
            "location": {
              "x": "-115.4363",
              "y": "32.58577"
            }
          },
          {
            "-place_id": "2316",
            "name": "Servicio la Guitarra, S.A. de C.V.",
            "cre_id": "PL/652/EXP/ES/2015",
            "location": {
              "x": "-99.24943",
              "y": "19.44123"
            }
          },
          {
            "-place_id": "2317",
            "name": "EST. DE SERVICIO SAGITARIO, S.DER.L.DE C.V.",
            "cre_id": "PL/641/EXP/ES/2015",
            "location": {
              "x": "-116.9871",
              "y": "32.46825"
            }
          },
          {
            "-place_id": "2318",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/462/EXP/ES/2015",
            "location": {
              "x": "-100.2444",
              "y": "25.73667"
            }
          },
          {
            "-place_id": "2319",
            "name": "SEVEN SERVICE, S.A DE C.V.",
            "cre_id": "PL/895/EXP/ES/2015",
            "location": {
              "x": "-99.16319",
              "y": "19.4423"
            }
          },
          {
            "-place_id": "2320",
            "name": "SERVICIOS GASOLINEROS DE MEXICO, S.A. DE C.V.",
            "cre_id": "PL/767/EXP/ES/2015",
            "location": {
              "x": "-100.9758",
              "y": "25.42712"
            }
          },
          {
            "-place_id": "2321",
            "name": "Servicio Calatrava, S.A. de C.V.",
            "cre_id": "PL/629/EXP/ES/2015",
            "location": {
              "x": "-99.13498",
              "y": "19.66663"
            }
          },
          {
            "-place_id": "2322",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/375/EXP/ES/2015",
            "location": {
              "x": "-104.8867",
              "y": "21.50385"
            }
          },
          {
            "-place_id": "2323",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/364/EXP/ES/2015",
            "location": {
              "x": "-105.2269",
              "y": "22.00695"
            }
          },
          {
            "-place_id": "2324",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/545/EXP/ES/2015",
            "location": {
              "x": "-116.9343",
              "y": "32.49222"
            }
          },
          {
            "-place_id": "2325",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/430/EXP/ES/2015",
            "location": {
              "x": "-99.20648",
              "y": "19.54421"
            }
          },
          {
            "-place_id": "2326",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/850/EXP/ES/2015",
            "location": {
              "x": "-115.4716",
              "y": "32.63718"
            }
          },
          {
            "-place_id": "2327",
            "name": "Gasolinería Rubí, S.A. de C.V.",
            "cre_id": "PL/867/EXP/ES/2015",
            "location": {
              "x": "-99.23139",
              "y": "18.83838"
            }
          },
          {
            "-place_id": "2328",
            "name": "BP ESTACIONES Y SERVICIOS ENERGETICOS, S.A. DE C.V.",
            "cre_id": "PL/781/EXP/ES/2015",
            "location": {
              "x": "-116.9867",
              "y": "32.52137"
            }
          },
          {
            "-place_id": "2329",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/624/EXP/ES/2015",
            "location": {
              "x": "-100.3987",
              "y": "25.76576"
            }
          },
          {
            "-place_id": "2330",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/406/EXP/ES/2015",
            "location": {
              "x": "-108.9852",
              "y": "25.77709"
            }
          },
          {
            "-place_id": "2331",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/418/EXP/ES/2015",
            "location": {
              "x": "-103.4485",
              "y": "20.70532"
            }
          },
          {
            "-place_id": "2332",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/482/EXP/ES/2015",
            "location": {
              "x": "-100.219",
              "y": "25.53799"
            }
          },
          {
            "-place_id": "2333",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/479/EXP/ES/2015",
            "location": {
              "x": "-98.32028",
              "y": "26.05507"
            }
          },
          {
            "-place_id": "2334",
            "name": "ESTACION DE SERVICIO CORCELES SA DE CV",
            "cre_id": "PL/905/EXP/ES/2015",
            "location": {
              "x": "-99.23235",
              "y": "19.36607"
            }
          },
          {
            "-place_id": "2335",
            "name": "Servicio Korian S.A. de C.V.",
            "cre_id": "PL/827/EXP/ES/2015",
            "location": {
              "x": "-104.6564",
              "y": "24.05557"
            }
          },
          {
            "-place_id": "2336",
            "name": "servicio libramiento jlp sa de cv",
            "cre_id": "PL/752/EXP/ES/2015",
            "location": {
              "x": "-100.8894",
              "y": "25.44036"
            }
          },
          {
            "-place_id": "2337",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/530/EXP/ES/2015",
            "location": {
              "x": "-100.9894",
              "y": "25.424"
            }
          },
          {
            "-place_id": "2338",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/595/EXP/ES/2015",
            "location": {
              "x": "-100.4674",
              "y": "25.69789"
            }
          },
          {
            "-place_id": "2339",
            "name": "COMERCIALIZADORA DE COMBUSTIBLES DE CHIAPAS, SA DE CV",
            "cre_id": "PL/674/EXP/ES/2015",
            "location": {
              "x": "-92.90816",
              "y": "16.80658"
            }
          },
          {
            "-place_id": "2340",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/453/EXP/ES/2015",
            "location": {
              "x": "-98.29163",
              "y": "26.05218"
            }
          },
          {
            "-place_id": "2341",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/511/EXP/ES/2015",
            "location": {
              "x": "-98.37744",
              "y": "26.05263"
            }
          },
          {
            "-place_id": "2342",
            "name": "Servicio Geyser, S.A. de C.V.",
            "cre_id": "PL/855/EXP/ES/2015",
            "location": {
              "x": "-99.03545",
              "y": "19.36047"
            }
          },
          {
            "-place_id": "2343",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/551/EXP/ES/2015",
            "location": {
              "x": "-100.2869",
              "y": "25.75716"
            }
          },
          {
            "-place_id": "2344",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/431/EXP/ES/2015",
            "location": {
              "x": "-99.17842",
              "y": "19.52987"
            }
          },
          {
            "-place_id": "2345",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/528/EXP/ES/2015",
            "location": {
              "x": "-103.4854",
              "y": "25.59509"
            }
          },
          {
            "-place_id": "2346",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/438/EXP/ES/2015",
            "location": {
              "x": "-100.9463",
              "y": "25.53754"
            }
          },
          {
            "-place_id": "2347",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/611/EXP/ES/2015",
            "location": {
              "x": "-98.35895",
              "y": "26.05935"
            }
          },
          {
            "-place_id": "2348",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/480/EXP/ES/2015",
            "location": {
              "x": "-106.1422",
              "y": "28.70224"
            }
          },
          {
            "-place_id": "2349",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/608/EXP/ES/2015",
            "location": {
              "x": "-100.2729",
              "y": "25.68494"
            }
          },
          {
            "-place_id": "2350",
            "name": "ARY SUPER SERVICIOS IV, SA DE CV",
            "cre_id": "PL/871/EXP/ES/2015",
            "location": {
              "x": "-103.3939",
              "y": "25.51376"
            }
          },
          {
            "-place_id": "2351",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/623/EXP/ES/2015",
            "location": {
              "x": "-103.2512",
              "y": "20.45484"
            }
          },
          {
            "-place_id": "2352",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/566/EXP/ES/2015",
            "location": {
              "x": "-100.3175",
              "y": "25.72574"
            }
          },
          {
            "-place_id": "2353",
            "name": "Gasolinería Colegio Militar, S.A. de C.V.",
            "cre_id": "PL/662/EXP/ES/2015",
            "location": {
              "x": "-99.1646",
              "y": "19.26855"
            }
          },
          {
            "-place_id": "2354",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/502/EXP/ES/2015",
            "location": {
              "x": "-104.8922",
              "y": "21.47978"
            }
          },
          {
            "-place_id": "2355",
            "name": "Suministro y Limpieza de Autobuses, S.A. de C.V.",
            "cre_id": "PL/906/EXP/ES/2015",
            "location": {
              "x": "-99.14",
              "y": "19.48179"
            }
          },
          {
            "-place_id": "2356",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/503/EXP/ES/2015",
            "location": {
              "x": "-103.4529",
              "y": "20.6932"
            }
          },
          {
            "-place_id": "2357",
            "name": "COMBUSTIBLES MB DE LA COSTA, S.A. DE C.V.",
            "cre_id": "PL/898/EXP/ES/2015",
            "location": {
              "x": "-95.79509",
              "y": "15.94528"
            }
          },
          {
            "-place_id": "2358",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/607/EXP/ES/2015",
            "location": {
              "x": "-98.40625",
              "y": "26.04127"
            }
          },
          {
            "-place_id": "2359",
            "name": "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",
            "cre_id": "PL/360/EXP/ES/2015",
            "location": {
              "x": "-108.9943",
              "y": "25.79409"
            }
          },
          {
            "-place_id": "2360",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/536/EXP/ES/2015",
            "location": {
              "x": "-105.3207",
              "y": "20.74955"
            }
          },
          {
            "-place_id": "2361",
            "name": "ESTACION HIPODROMO, S.A. DE C.V.",
            "cre_id": "PL/704/EXP/ES/2015",
            "location": {
              "x": "-116.9981",
              "y": "32.51191"
            }
          },
          {
            "-place_id": "2362",
            "name": "DIAZ GAS, S.A. DE C.V.",
            "cre_id": "PL/748/EXP/ES/2015",
            "location": {
              "x": "-106.4809",
              "y": "31.74264"
            }
          },
          {
            "-place_id": "2363",
            "name": "ESTACION DE SERVICIO PUERTA GRANDE,  S. DE R.L. DE C.V.",
            "cre_id": "PL/711/EXP/ES/2015",
            "location": {
              "x": "-116.9417",
              "y": "32.48495"
            }
          },
          {
            "-place_id": "2364",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/506/EXP/ES/2015",
            "location": {
              "x": "-104.904",
              "y": "21.52525"
            }
          },
          {
            "-place_id": "2365",
            "name": "BP ESTACIONES Y SERVICIOS ENERGETICOS, S.A. DE C.V.",
            "cre_id": "PL/780/EXP/ES/2015",
            "location": {
              "x": "-116.931",
              "y": "32.5438"
            }
          },
          {
            "-place_id": "2366",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/846/EXP/ES/2015",
            "location": {
              "x": "-106.4088",
              "y": "31.6654"
            }
          },
          {
            "-place_id": "2367",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/496/EXP/ES/2015",
            "location": {
              "x": "-100.8398",
              "y": "25.61303"
            }
          },
          {
            "-place_id": "2368",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/460/EXP/ES/2015",
            "location": {
              "x": "-98.22788",
              "y": "26.04685"
            }
          },
          {
            "-place_id": "2369",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/582/EXP/ES/2015",
            "location": {
              "x": "-98.27101",
              "y": "26.08634"
            }
          },
          {
            "-place_id": "2370",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/481/EXP/ES/2015",
            "location": {
              "x": "-100.1764",
              "y": "25.69438"
            }
          },
          {
            "-place_id": "2371",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/422/EXP/ES/2015",
            "location": {
              "x": "-105.3031",
              "y": "20.74488"
            }
          },
          {
            "-place_id": "2372",
            "name": "DIAZ GAS, S.A. DE C.V.",
            "cre_id": "PL/793/EXP/ES/2015",
            "location": {
              "x": "-106.407",
              "y": "31.64269"
            }
          },
          {
            "-place_id": "2373",
            "name": "ESTACION AMBAR, S. DE R.L. DE C.V.",
            "cre_id": "PL/661/EXP/ES/2015",
            "location": {
              "x": "-116.9228",
              "y": "32.53723"
            }
          },
          {
            "-place_id": "2374",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/612/EXP/ES/2015",
            "location": {
              "x": "-100.998",
              "y": "25.45015"
            }
          },
          {
            "-place_id": "2375",
            "name": "COMERCIAL PETROLIFERA, S.A. DE C.V.",
            "cre_id": "PL/839/EXP/ES/2015",
            "location": {
              "x": "-105.2707",
              "y": "20.73753"
            }
          },
          {
            "-place_id": "2376",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/557/EXP/ES/2015",
            "location": {
              "x": "-98.37684",
              "y": "26.05171"
            }
          },
          {
            "-place_id": "2377",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/367/EXP/ES/2015",
            "location": {
              "x": "-108.9733",
              "y": "25.79476"
            }
          },
          {
            "-place_id": "2378",
            "name": "ESTACION AMBAR, S. DE R.L. DE C.V.",
            "cre_id": "PL/654/EXP/ES/2015",
            "location": {
              "x": "-117.0529",
              "y": "32.49525"
            }
          },
          {
            "-place_id": "2379",
            "name": "Becktrop Operadora SA de CV",
            "cre_id": "PL/681/EXP/ES/2015",
            "location": {
              "x": "-103.4197",
              "y": "20.68804"
            }
          },
          {
            "-place_id": "2380",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/668/EXP/ES/2015",
            "location": {
              "x": "-117.0559",
              "y": "32.39319"
            }
          },
          {
            "-place_id": "2381",
            "name": "SERVICIO EFIGAS, S. DE R.L. DE C.V.",
            "cre_id": "PL/875/EXP/ES/2015",
            "location": {
              "x": "-116.949",
              "y": "32.52652"
            }
          },
          {
            "-place_id": "2382",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/665/EXP/ES/2015",
            "location": {
              "x": "-116.9643",
              "y": "32.50297"
            }
          },
          {
            "-place_id": "2383",
            "name": "GRUPO GASOLINERO ROMCAL S.A. DE C.V.",
            "cre_id": "PL/359/EXP/ES/2015",
            "location": {
              "x": "0",
              "y": "0"
            }
          },
          {
            "-place_id": "2384",
            "name": "ESTACION RAEL, S. DE R.L. DE C.V.",
            "cre_id": "PL/861/EXP/ES/2015",
            "location": {
              "x": "-117.0305",
              "y": "32.49149"
            }
          },
          {
            "-place_id": "2385",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/579/EXP/ES/2015",
            "location": {
              "x": "-100.3196",
              "y": "25.70392"
            }
          },
          {
            "-place_id": "2386",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/508/EXP/ES/2015",
            "location": {
              "x": "-105.2228",
              "y": "20.62714"
            }
          },
          {
            "-place_id": "2387",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/475/EXP/ES/2015",
            "location": {
              "x": "-98.35052",
              "y": "26.04279"
            }
          },
          {
            "-place_id": "2388",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/491/EXP/ES/2015",
            "location": {
              "x": "-97.47758",
              "y": "25.86598"
            }
          },
          {
            "-place_id": "2389",
            "name": "Ary Super Servicios I, SA de CV",
            "cre_id": "PL/856/EXP/ES/2015",
            "location": {
              "x": "-103.4926",
              "y": "25.58082"
            }
          },
          {
            "-place_id": "2390",
            "name": "GASOLINERÍA EL CAPITAN SA DE CV",
            "cre_id": "PL/787/EXP/ES/2015",
            "location": {
              "x": "0",
              "y": "0"
            }
          },
          {
            "-place_id": "2391",
            "name": "SERVICIO CIBOLA, S.A. DE C.V.",
            "cre_id": "PL/676/EXP/ES/2015",
            "location": {
              "x": "-100.9801",
              "y": "29.32497"
            }
          },
          {
            "-place_id": "2392",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/493/EXP/ES/2015",
            "location": {
              "x": "-98.3122",
              "y": "26.06018"
            }
          },
          {
            "-place_id": "2393",
            "name": "HIDROCARBUROS EXPRESS OCOZOCOAUTLA SA DE CV ",
            "cre_id": "PL/746/EXP/ES/2015",
            "location": {
              "x": "-92.13802",
              "y": "15.66675"
            }
          },
          {
            "-place_id": "2394",
            "name": "GRUPO GOCALVI SA DE CV",
            "cre_id": "PL/857/EXP/ES/2015",
            "location": {
              "x": "-106.5588",
              "y": "31.77539"
            }
          },
          {
            "-place_id": "2395",
            "name": "ORBA GAS SA DE CV",
            "cre_id": "PL/772/EXP/ES/2015",
            "location": {
              "x": "-100.55",
              "y": "28.7"
            }
          },
          {
            "-place_id": "2396",
            "name": "GRUPO EMPRESARIAL CACHANILLA SA DE CV",
            "cre_id": "PL/388/EXP/ES/2015",
            "location": {
              "x": "-115.5103",
              "y": "32.62274"
            }
          },
          {
            "-place_id": "2397",
            "name": "Estación de Servicios Costeña, S.A. de C.V.",
            "cre_id": "PL/696/EXP/ES/2015",
            "location": {
              "x": "-98.87991",
              "y": "19.39925"
            }
          },
          {
            "-place_id": "2398",
            "name": "MULTISERVICIOS LA PILARICA SA DE CV ",
            "cre_id": "PL/412/EXP/ES/2015",
            "location": {
              "x": "-109.0235",
              "y": "25.80817"
            }
          },
          {
            "-place_id": "2399",
            "name": "GRUPO OCTANO, S.A. DE C.V.",
            "cre_id": "PL/532/EXP/ES/2015",
            "location": {
              "x": "-100.7929",
              "y": "19.90299"
            }
          },
          {
            "-place_id": "2400",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/437/EXP/ES/2015",
            "location": {
              "x": "-100.1731",
              "y": "25.62543"
            }
          },
          {
            "-place_id": "2401",
            "name": "PETROMAX, S.A. DE C.V.",
            "cre_id": "PL/609/EXP/ES/2015",
            "location": {
              "x": "-100.2486",
              "y": "25.78408"
            }
          },
          {
            "-place_id": "2402",
            "name": "ESTACION HIPODROMO, S.A. DE C.V.",
            "cre_id": "PL/705/EXP/ES/2015",
            "location": {
              "x": "-116.9517",
              "y": "32.50465"
            }
          }
  ];

  constructor() {
  }

  getPlaces() {
    return this.places;
  }
}

