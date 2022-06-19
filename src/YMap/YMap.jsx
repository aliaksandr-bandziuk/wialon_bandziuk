import { YMaps, Map } from "@pbe/react-yandex-maps";

const YMap = () => (
  <YMaps>
    <Map width='100%' height='100%' defaultState={{ center: [53.90, 27.56], zoom: 11 }} />
  </YMaps>
)

export default YMap;