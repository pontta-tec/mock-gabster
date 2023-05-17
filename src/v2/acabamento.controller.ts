import { Controller, Get, Param, Query } from '@nestjs/common';
import * as ACABAMENTO_LIST_RESPONSE from './data/acabamento-list.json';
import {
  paginated,
  elementWithId,
  SINGLE_META_DEFAULT as meta,
} from './gabster.util';

@Controller('/v2/acabamento')
export class AcabamentoController {
  @Get()
  findAll(@Query() query) {
    return paginated(ACABAMENTO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const object = elementWithId(ACABAMENTO_LIST_RESPONSE.objects, id);
    return { meta, object };
  }
}
