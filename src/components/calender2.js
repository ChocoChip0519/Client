import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Calender2.module.css";

const Calender2 = () => {
  return (
    <div id={styles.home}>
      <h1 id={styles.title}>
        2022 Self <br />
        Advent Calender
      </h1>
        <div id={styles.calender_grid}>
            <Link to="/letter2">
            <div className={styles.item}>1</div>
            </Link>
            <Link to="/letter2">
            <div className={styles.item}>2</div>
            </Link>
            <div className={styles.item}>3</div>
            <div className={styles.item}>4</div>
            <div className={styles.item}>5</div>
            <div className={styles.item}>6</div>
            <div className={styles.item}>7</div>
            <div className={styles.item}>8</div>
            <div className={styles.item}>9</div>
            <div className={styles.item}>10</div>
            <div className={styles.item}>11</div>
            <div className={styles.item}>12</div>
            <div className={styles.item}>13</div>
            <div className={styles.item}>14</div>
            <div className={styles.item}>15</div>
            <div className={styles.item}>16</div>
            <div className={styles.item}>17</div>
            <div className={styles.item}>18</div>
            <div className={styles.item}>19</div>
            <div className={styles.item}>20</div>
            <div className={styles.item}>21</div>
            <div className={styles.item}>22</div>
            <Link to="/Letter3">
            <div className={styles.item}>23</div>
            </Link>
            <div className={styles.item2}>24</div>
        </div>
    </div>
  );
};

export default Calender2;