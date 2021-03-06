import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from '../common/TextField.jsx';
import DiscountValueField from './DiscountValueField.jsx';

import styles from './discountDetail.css';

const DiscountDetailForm = ({ discount, items, errors, onChange }) => {

  const discountOptions = [
    { name: 'applyTypeID', value: 0, label: 'Everything' },
    { name: 'applyTypeID', value: 1, label: 'Specific Items' }
  ];

  const valueType = [
    { name: 'discountTypeID', value: 0, label: 'Percentage' },
    { name: 'discountTypeID', value: 1, label: 'Currency Value' }
  ];

  const displayItems = items.map(item => {
    return {
      name: 'items',
      value: item.itemID,
      label: item.label
    };
  });

  const selectedDiscountOption = discountOptions.find(option => option.value === discount.applyTypeID);
  const selectedValueType = valueType.find(option => option.value === discount.discountTypeID);
  const displayItemSelection = selectedDiscountOption && !!selectedDiscountOption.value;

  return (
    <div className="ibox-content">
      <div className="row">
        <div className="col-md-offset-1 col-sm-4">
          <div className="row">
            <TextField
              fullWidth
              name="discountName"
              value={discount.discountName}
              floatingLabelText="Discount Name"
              onChange={onChange}
              errorText={errors.discountName} />
          </div>
          <div className={styles['discount-option-control']}>
            <div className="row">
              <div className={styles['discount-name-control']}>
                <SelectField
                  floatingLabelText="Value Type"
                  value={selectedValueType}
                  onChange={onChange}
                >
                  {valueType.map(option => {
                    return (
                      <MenuItem
                        key={option.value}
                        primaryText={option.label}
                        value={option} />
                    );
                  })}
                </SelectField>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <DiscountValueField
                fullWidth
                isPercent={selectedValueType.value === 0}
                name="value"
                value={discount.value}
                floatingLabelText="Value"
                onChange={onChange}
                style={{ display: 'inline-block', width: '30%' }}
                errorText={errors.value} />
            </div>
          </div>
          <div className={styles['discount-option-control']}>
            <div className="row">
              <div className={styles['discount-name-control']}>
                <SelectField
                  floatingLabelText="Apply To"
                  value={selectedDiscountOption}
                  onChange={onChange}
                >
                  {discountOptions.map(option => {
                    return (
                      <MenuItem
                        key={option.value}
                        primaryText={option.label}
                        value={option} />
                    );
                  })}
                </SelectField>
              </div>
            </div>
          </div>

          <div className={styles['discount-option-control']}>
            <div className="row">
              {displayItemSelection &&
                (<div className={styles['discount-name-control']}>
                  <SelectField
                    multiple
                    floatingLabelText="Items"
                    value={discount.items}
                    onChange={onChange}
                  >
                    {displayItems.map(item => {
                      return (
                        <MenuItem
                          key={item.value}
                          insetChildren
                          checked={discount.items
                            && discount.items.includes(item.value)}
                          value={item.value}
                          primaryText={item.label}
                        />
                      );
                    })}
                  </SelectField>
                </div>
                )}
            </div>
          </div>
        </div>
        <div className="col-md-offset-1 col-sm-4">
          <div className={styles['detail-icon']}>
            <i className="material-icons" style={{ fontSize: '124px' }}>play_for_work</i>
          </div>
        </div>
      </div>
    </div>
  );
};

DiscountDetailForm.propTypes = {
  errors: PropTypes.object.isRequired,
  discount: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CSSModules(DiscountDetailForm, styles);
