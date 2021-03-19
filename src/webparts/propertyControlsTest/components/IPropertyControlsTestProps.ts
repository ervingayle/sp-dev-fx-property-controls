import { BaseComponentContext } from '@microsoft/sp-component-base';
import { IColor } from 'office-ui-fabric-react/lib/utilities/color';

import { IDateTimeFieldValue } from '../../../PropertyFieldDateTimePicker';
import { IPropertyFieldGroupOrPerson } from '../../../PropertyFieldPeoplePicker';
import { IPickerTerms } from '../../../PropertyFieldTermPicker';
import { IPropertyFieldSite } from '../../../propertyFields/sitePicker';
import { IFilePickerResult } from '../../../PropertyFieldFilePicker';
import { IRoleDefinitionInformation  } from "../../../PropertyFieldRoleDefinitionPicker";
import { IFolder } from "../../../PropertyFieldFolderPicker";

export interface IPropertyControlsTestProps {
  password:string;
  context: BaseComponentContext;
  numberValue: number;
  multiSelect: string[];
  people: IPropertyFieldGroupOrPerson[];
  list: string | string[];
  listFiltered: string;
  multiList: string[];
  multiListFiltered: string[];
  view: string;
  column: string;
  multiColumn: string[];
  terms: IPickerTerms;
  datetime: IDateTimeFieldValue;
  color: string;
  colorObj: IColor;
  spinValue: number;
  dropdownWithCalloutKey: string;
  sliderWithCalloutValue: number;
  choiceGroupWithCalloutValue: string;
  dropdownInfoHeaderKey: string;
  textInfoHeaderValue: string;
  toggleInfoHeaderValue: boolean;
  checkboxWithCalloutValue: boolean;
  htmlCode: string;
  collectionData: any[];
  orderedItems: any[];
  swatchColor: string;
  enterpriseTerms: IPickerTerms;
  sites: IPropertyFieldSite[];
  searchLibrary: string;
  message:string;
  filePickerResult: IFilePickerResult;
  roleDefinitions: IRoleDefinitionInformation[];
  folderPicker: IFolder;
  guid: string;
  iconPicker: string;
  editableComboBox: string;
}
