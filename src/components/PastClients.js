import React from "react";
import Card from "../components/Card";
import { StaticImage } from "gatsby-plugin-image";

const PastClients = () => (
  <div className="">
    <h2 className="text-3xl font-bold font-serif leading-none mb-8">
      Past Partnerships
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <Card className="place-content-center">
        <div class="bg-walden-green place-content-center">
          <StaticImage
            src="../images/client-logos/walden.svg"
            alt="Walden Local"
          />
        </div>
      </Card>
      <Card className="place-content-center">
        <StaticImage
          src="../images/client-logos/glossier.svg"
          alt="Glossier"
        />
      </Card>
      <Card className="place-content-center">
        <StaticImage
          src="../images/client-logos/casper-logo.png"
          alt="Casper"
        />
      </Card>
      <Card className="place-content-center sm:hidden md:block">
        <StaticImage
          src="../images/client-logos/florence-logo.png"
          alt="Florence"
        />
      </Card>
      <Card className="place-content-center hidden lg:block">
        <StaticImage
          src="../images/client-logos/felcana-logo.png"
          alt="Felcana"
        />
      </Card>
    </div>
  </div>
);

export default PastClients;
