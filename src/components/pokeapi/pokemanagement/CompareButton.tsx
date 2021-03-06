import React from "react";
import PropTypes from "prop-types";

import CustomButton from "components/shared/buttons/CustomButton";
import { POKE_MAX_ITEM_LIMIT } from "components/enums";

import "./CompareButton.scss";

interface Props {
  selectedItems: string[],
  multiplePokemonsFlag: boolean,
  handleClickBtnCompare: (event: React.SyntheticEvent<HTMLSelectElement | EventTarget>) => void
}

const CompareButton = (props: Props) => {
  const itemStatusLength = props.selectedItems.length;
  const isDisabled = !props.multiplePokemonsFlag;

  return props.multiplePokemonsFlag ? (
    <div className="poke-toolbar-features">
      <div className="poke-toolbar-features__item-info">
        <span>
          {itemStatusLength
            ? `*Selected items ${itemStatusLength}/${POKE_MAX_ITEM_LIMIT}`
            : `*Selected items 0/${POKE_MAX_ITEM_LIMIT}`}
        </span>
      </div>
      <div className="poke-toolbar-features__compare-btn">
        <CustomButton
          handleClickEvent={props.handleClickBtnCompare}
          disabled={isDisabled}
          isVisible={true}
          btnName="Compare selected"
          className=""
        />
      </div>
    </div>
  ) : null;
};

CompareButton.propTypes = {
  selectedItems: PropTypes.array,
  handleClickBtnCompare: PropTypes.func,
  multiplePokemonsFlag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default CompareButton;
