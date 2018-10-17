import React from "react";

function LocalizacaoGoogleMap() {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        style={{ width: "100%", height: "400px" }}
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=R.%20Eliane%20Mota%2C%202505%20-%20Ipiranga%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2088110-840.%20Brasil+(Pereira%20Descart%C3%A1veis)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  );
}

export default LocalizacaoGoogleMap;
