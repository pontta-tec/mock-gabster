import { Controller, Get, Param, Query } from '@nestjs/common';
import * as UNIDADE_MEDIDA_LIST_RESPONSE from './data/unidade-medida-list.json';
import {
  paginated,
  elementWithId,
  SINGLE_META_DEFAULT as meta,
} from './gabster.util';

@Controller('/v2/unidade-medida')
export class UnidadeMedidaController {
  @Get()
  findAll(@Query() query) {
    return paginated(UNIDADE_MEDIDA_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const object = elementWithId(
      UNIDADE_MEDIDA_LIST_RESPONSE.objects,
      id,
    );
    return { meta, object };
  }
}
