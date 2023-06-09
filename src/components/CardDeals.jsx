import React from "react";
import styles, { layout } from "../style";
import { sup } from "../assets";
import Button from "./Button";

export const CardDeals = () => (
  <section className={layout.section}>
    <div className={"pl-20"}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={" w-[470px] mt-5 text-dimWhite "}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
        ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={sup} alt="card_info" className="w-[100%] h-[100%] z-[5] " />
    </div>
  </section>
);

export default CardDeals;
