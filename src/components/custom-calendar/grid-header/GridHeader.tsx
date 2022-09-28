import { HiOutlineExclamation } from "react-icons/hi";
import CheckTerm from "../../check-term/CheckTerm";

// const [isOpen, setIsOpen] = useState(false)

function GridHeader() {
  return (
    <div className="grid-header-container">
      <div className="icon-text-container">
        <HiOutlineExclamation />
        <label className="paragraph">
          Podrazumjevano je da je nastavnik dostupan u svim terminima. Potrebno
          je rezervisati termine u kojima je nastavnik nedostupan.
        </label>
      </div>
      <div className="buttons-group">
        <CheckTerm termName={"Nedostupan termin"} unavailable ={true} />
        <CheckTerm termName={"Zeljeni termin"} unavailable={false} />
      </div>
    </div>
  );
}

export default GridHeader;
