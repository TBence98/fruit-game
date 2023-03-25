import classes from "./Pool.module.css";

const Pool = ({ poolDatas, onSelect }) => {
    function selectionHandler(id) {
        onSelect(id);
    }

    return (
        <div className={classes.pool}>
            {poolDatas.map((fruitGroup) => (
                <div
                    className={`${classes.pool__group} ${
                        fruitGroup.isSelected
                            ? classes["pool__group--selected"]
                            : ""
                    } ${
                        fruitGroup.isActiveInPool
                            ? ""
                            : classes["pool__group--inactive"]
                    }`}
                    onClick={(e) => selectionHandler(fruitGroup.id)}
                    key={fruitGroup.id}
                >
                    {fruitGroup.groupImage}
                </div>
            ))}
        </div>
    );
};

export default Pool;
