import {
    requireField,
    notSpecialCharChat,
    limitedName,
} from './commonValiate'

const addressFormValidate = values => {
    let errors = {}
    const {address, provinceId, districtId, communeId} = values
    // Kiem tra Tinh/tp - Quan/H - Xa/P
    const isRequireProvinceId = requireField('provinceId', provinceId)
    if(isRequireProvinceId || Number(provinceId) < 0 || Number(provinceId) > 96){
        errors.provinceId = "Chọn Tỉnh/Thành phố!"
        return errors
    }
    const isRequireDistrictId = requireField('districtId', districtId)
    if(isRequireDistrictId || Number(districtId) < 0 || Number(districtId) > 973){
        errors.districtId = "Chọn Quận/Huyện!"
        return errors
    }
    const isRequireCommuneId = requireField('communeId', communeId)
    if(isRequireCommuneId || Number(communeId) < 1 || Number(communeId) > 10615){
        errors.communeId = "Chọn Xã/Phường!"
        return errors
    }

    // Kiem tra dia chi noi o
    const isRequireAddress = requireField('address', address)
    if(isRequireAddress){
        errors.address = isRequireAddress
        return errors
    }
    const formatAddress = notSpecialCharChat('address', address)
    if(formatAddress){
        errors.address = formatAddress
        return errors
    }
    const limitAddress = limitedName('address', address)
    if(limitAddress){
        errors.address = limitAddress
        return errors
    }

    return errors
}

export default addressFormValidate